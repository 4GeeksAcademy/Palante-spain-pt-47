"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, User, Freelancer, Readings, Meditations, Podcast, Favorite_Meditations, Favorite_Podcast, Favorite_Readings,Appointment
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
import random
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

from flask_bcrypt import Bcrypt
from datetime import datetime
#from models import Person

ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = os.environ.get("SUPER_SECRET")  # Change this!
jwt = JWTManager(app)

bcrypt = Bcrypt(app)

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

                   ######### USUARIOS #########

##### ruta de registro de usuario #####
@app.route("/userregister", methods=['POST'])
def user_register():
    body = request.get_json(silent=True)
    if body is None:
        return jsonify('body must be sent'), 400
    if 'full_name' not in body:
        return jsonify('full_name is required'), 400
    if 'email' not in body:
        return jsonify('email is required'), 400
    if 'password' not in body:
        return jsonify('password is required'), 400 
       
    pw_hash = bcrypt.generate_password_hash(body['password']).decode('utf-8')
    new_user = User(full_name = body['full_name'], email = body['email'], password = pw_hash, is_active = True)
    
    db.session.add(new_user)
    db.session.commit()
    return jsonify('Successful registration'),200

##### ruta de inicio de sesion de usuario #####
@app.route("/userlogin", methods=["POST"])
def user_login():
    body = request.get_json(silent=True)
    if body is None:
        return jsonify('body must be sent'), 400
    if 'email' not in body:
        return jsonify('email is required'), 400
    if 'password' not in body:
        return jsonify('password is required'), 400

    user = User.query.filter_by(email=body['email']).first()
    if user is None or user.email != body['email'] or not bcrypt.check_password_hash(user.password, body['password']):#user.password != body['password']: 
        return jsonify('incorrect email or password'),400

    access_token = create_access_token(identity=body['email'])
    return jsonify(access_token=access_token)


##### ruta privada de usuario #####
@app.route("/userprivate", methods=['GET'])
@jwt_required()
def user_private():
    email = get_jwt_identity()
    return jsonify(email = email)

                #########FREELANCERS#########

##### ruta de registro de freelancer #####
@app.route("/freelancerregister", methods=['POST'])
def freelancer_register():
    body = request.get_json(silent=True)
    if body is None:
        return jsonify('body must be sent'), 400
    if 'full_name' not in body:
        return jsonify('full_name is required'), 400
    if 'age' not in body:
        return jsonify('age is required'), 400
    if 'email' not in body:
        return jsonify('email is required'), 400
    if 'password' not in body:
        return jsonify('password is required'), 400
    if 'years_of_experience' not in body:
        return jsonify('years_of_experience is required'), 400
       
    pw_hash = bcrypt.generate_password_hash(body['password']).decode('utf-8')
    new_freelancer = Freelancer(full_name=body['full_name'], age=body['age'], email=body['email'], password=pw_hash, years_of_experience =body['years_of_experience'], is_active=True)

    db.session.add(new_freelancer)
    db.session.commit()
    return jsonify('Successful registration'), 200 

##### ruta de inicio de sesion de freelancer #####
@app.route("/freelancerlogin", methods=['POST'])
def freelancer_token():
    body = request.get_json(silent=True)
    if body is None:
        return jsonify('body must be sent'), 400
    if 'email' not in body:
        return jsonify('email is required'), 400
    if 'password' not in body:
        return jsonify('password is required'), 400
    
    freelancer = Freelancer.query.filter_by(email=body['email']).first()
    if freelancer is None or freelancer.email != body['email'] or not bcrypt.check_password_hash(freelancer.password, body['password']): #freelancer.password != body['password']: 
        return jsonify('incorrect email or password'),400
    
    ##### aqui se crea un token que debe ser guardado en el front-end con sessionstorage y se utilizara para hacer las peticiones #####
    access_token = create_access_token(identity=body['email'])
    return jsonify(access_token=access_token)  

##### ruta privada de freelanecer #####
@app.route("/freelancerprivate", methods=['GET'])
@jwt_required()
def freelancer_private():
    email = get_jwt_identity()
    return jsonify(email = email)

                #########READINGS#########

##### endpoints para ver todos los Readings #####                
@app.route('/readings', methods=['GET'])
def get_readings():
    readings_all = Readings.query.all()  
    readings_list = list(map(lambda readings: readings.serialize(), readings_all))
    return jsonify(readings_list), 200

##### endpoints para ver cada Readings #####
@app.route('/readings/<int:reading_id>', methods=['GET'])
def get_reading_id(reading_id):
    reading = Readings.query.get(reading_id)
    if reading is None:
        return jsonify({'msg':'Reading not found'}), 400
    else:
        return jsonify({'msg':'ok','inf':reading.serialize()})
    
##### endpoints para ingresar Readings a la tabla #####
@app.route('/readings', methods=['POST'])
def create_readings():
    body = request.get_json(silent=True)
    print(body)
    if body is None:
        return jsonify({'msg': 'Debes enviar informacion en el body'}), 400
    if 'title' not in body:
        return jsonify({'msg': 'Debes enviar un title en el body'}), 400
    if 'review' not in body:
        return jsonify({'msg': 'Debes enviar un review en el body'}), 400
    if 'URLPhoto' not in body:
        return jsonify({'msg': 'Debes enviar una URL en el body'}), 400
    if 'download' not in body:
        return jsonify({'msg': 'Debes enviar una URL de en el body'}), 400
    
        # Generar un id aleatorio si no se proporciona
    id_reading = random.randint(1, 1000000)
    
    new_reading = Readings(title=body['title'], review=body['review'], URLPhoto=body['URLPhoto'], download=body['download'], id=id_reading)
    
    db.session.add(new_reading)
    db.session.commit()

    return jsonify({'msg': 'ok'}),200

##### endpoints para actualizar la tabla de Readings #####
@app.route('/readings/<int:reading_id>', methods=['PUT'])
def update_reading(reading_id):
    reading = Readings.query.get(reading_id)
    if reading is None:
        return jsonify({'msg': 'El reading de id:{} no existe'.format(reading_id)})
    body = request.get_json(silent=True)
    if body is None:
        return jsonify({'msg': 'Debes enviar informacion en el body'}), 400
    if 'title' in body:
        reading.title = body['title']
    if 'URLPhoto' in body:
        reading.URLPhoto = body['URLPhoto']
    if 'review' in body:
        reading.review = body['review']
    db.session.commit()
    return jsonify({'msg':'ok'}), 200

##### endpoints para eliminar en la tabla de Readings #####
@app.route('/readings/<int:reading_id>', methods=['DELETE'])
def delete_reading(reading_id):
    reading = Readings.query.get(reading_id)
    if reading is None:
        raise APIException('El reading con id {} no existe'.format(reading_id), status_code=400)
    db.session.delete(reading)
    db.session.commit()
    return jsonify({'msg':'ok'}), 200

                #########MEDITATIONS#########

##### endpoint para ver todos los Meditations #####
@app.route('/meditations', methods=['GET'])
def get_meditations():
    meditations_all = Meditations.query.all()  
    meditations_list = list(map(lambda meditations: meditations.serialize(), meditations_all))
    return jsonify(meditations_list), 200

##### endpoint para ver cada Meditations #####
@app.route('/meditations/<int:meditation_id>', methods=['GET'])
def get_meditation_id(meditation_id):
    meditation = Meditations.query.get(meditation_id)
    if meditation is None:
        return jsonify({'msg':'Meditation not found'}), 400
    else:
        return jsonify({'msg':'ok', 'inf':meditation.serialize()})

##### endpoint para agregar Meditations #####
@app.route('/meditations', methods=['POST'])
def create_meditations():
    body = request.get_json(silent=True)
    print(body)
    if body is None:
        return ({'msg':'Send information in body'})
    if 'title' not in body:
        return ({'msg':'Send tittle in body'})
    if 'URLVideo' not in body:
        return ({'msg':'Send URL in body'})
    
    # Generar un id aleatorio si no se proporciona
    id_meditation = random.randint(1, 1000000)
    
    new_meditation = Meditations(title=body['title'], URLVideo=body['URLVideo'], id=id_meditation)
    
    db.session.add(new_meditation)
    db.session.commit()
    return jsonify({'msg': 'ok'}),200

##### endpoint para actualizar en la tabla de Meditations #####
@app.route('/meditations/<int:meditation_id>', methods=['PUT'])
def update_meditation(meditation_id):
    meditation = Meditations.query.get(meditation_id)
    if meditation is None:
        return jsonify({'msg': 'The id of meditation:{} does not exist'.format(meditation_id)})
    body = request.get_json(silent=True)
    if body is None:
        return jsonify({'msg': 'Send information in the body'}), 400
    if 'title' in body:
        meditation.title = body['title']
    if 'URLVideo' in body:
        meditation.URLVideo = body['URLVideo']
    
    db.session.commit()
    return jsonify({'msg':'ok'}), 200

##### endpoint para eliminar en la tabla de Meditations #####
@app.route('/meditations/<int:meditation_id>', methods=['DELETE'])
def delete_meditation(meditation_id):
    meditation = Meditations.query.get(meditation_id)
    if meditation is None:
        raise APIException({'The id of meditation:{} does not exist'.format(meditation_id)}, status_code=400)
    db.session.delete(meditation)
    db.session.commit()
    return jsonify({'msg':'ok'}), 200

                #########PODCATS#########

##### endpoint para ver todos los Podcast #####
@app.route('/podcast', methods=['GET'])
def get_podcast():
    podcast_all = Podcast.query.all()  
    podcast_list = list(map(lambda podcast: podcast.serialize(), podcast_all))
    return jsonify(podcast_list), 200

##### endpoint para ver cada Podcast #####
@app.route('/podcast/<int:podcast_id>', methods=['GET'])
def get_podcast_id(podcast_id):
    podcast = Podcast.query.get(podcast_id)
    if podcast is None:
        return jsonify({'msg':'Podcast not found'}), 400
    else:
        return jsonify({'msg':'ok', 'inf':podcast.serialize()})

##### endpoint para agregar Podcast #####
@app.route('/podcast', methods=['POST'])
def create_podcast():
    body = request.get_json(silent=True)
    print(body)
    if body is None:
        return ({'msg':'Send information in body'})
    if 'title' not in body:
        return ({'msg':'Send title in body'})
    if 'URLListen' not in body:
        return ({'msg':'Send URL in body'})
    if 'URLPhoto' not in body:
        return ({'msg':'Send URL in body'})
    
    # Generar un id aleatorio si no se proporciona
    id_podcast = random.randint(1, 1000000)
    
    new_podcast = Podcast(title=body['title'], URLListen=body['URLListen'], URLPhoto=body['URLPhoto'], id=id_podcast)
    
    db.session.add(new_podcast)
    db.session.commit()
    return jsonify({'msg': 'ok'}),200

##### endpoint para actualizar en la tabla de Podcast #####
@app.route('/podcast/<int:podcast_id>', methods=['PUT'])
def update_podcast(podcast_id):
    podcast = Podcast.query.get(podcast_id)
    if podcast is None:
        return jsonify({'msg': 'The id of podcast:{} does not exist'.format(podcast_id)})
    body = request.get_json(silent=True)
    if body is None:
        return jsonify({'msg': 'Send information in the body'}), 400
    if 'title' in body:
        podcast.title = body['title']
    if 'URLListen' in body:
        podcast.URLListen = body['URLListen']
    if 'URLPhoto' in body:
        podcast.URLPhoto = body['URLPhoto']
    db.session.commit()
    return jsonify({'msg':'ok'}), 200

##### endpoint para eliminar en la tabla de Podcast #####
@app.route('/podcast/<int:podcast_id>', methods=['DELETE'])
def delete_podcast(podcast_id):
    podcast = Podcast.query.get(podcast_id)
    if podcast is None:
        raise APIException({'The id of meditation:{} does not exist'.format(podcast_id)}, status_code=400)
    db.session.delete(podcast)
    db.session.commit()
    return jsonify({'msg':'ok'}), 200


                #########TABLA FAVORITOS#########

##### endpoint para agregar favoritos de readings #####
@app.route('/favorites_readings', methods=['POST'])
@jwt_required()
def create_favorite_readings():
    body = request.get_json(silent=True)
    print(body)
    if body is None:
        return jsonify({'msg': 'Send information in the body'}), 400
    if 'reading_id' not in body:
        return jsonify({'msg': 'Send reading_id in the body'}), 400
    
    user_email = get_jwt_identity()
    print(user_email)
    user = User.query.filter_by(email = user_email).first()
    print(user)
    user_id = user.id
    
    existing_relation = Favorite_Readings.query.filter_by(user_id=user_id, reading_id=body['reading_id']).first()
    if existing_relation:
        return jsonify({'msg': 'Relation already exists'}), 400

    new_favorite_readings = Favorite_Readings(user_id=user_id, reading_id=body['reading_id'])
    db.session.add(new_favorite_readings)
    db.session.commit()
    return jsonify({'msg': 'ok'}),200

##### endpoint para agregar favoritos de meditaciones #####
@app.route('/favorites_meditations', methods=['POST'])
@jwt_required()
def create_favorite_meditations():
    body = request.get_json(silent=True)
    print(body)
    if body is None:
        return jsonify({'msg': 'Send information in the body'}), 400
    
    
    user_email = get_jwt_identity()
    print(user_email)
    user = User.query.filter_by(email = user_email).first()
    print(user)
    user_id = user.id
    
    existing_relation = Favorite_Meditations.query.filter_by(user_id=user_id, meditations_id=body['meditations_id']).first()
    if existing_relation:
        return jsonify({'msg': 'Relation already exists'}), 400

    new_favorite_meditations = Favorite_Meditations(user_id=user_id, meditations_id=body['meditations_id'])
    db.session.add(new_favorite_meditations)
    db.session.commit()
    return jsonify({'msg': 'ok'}),200


##### endpoint para agregar favoritos de podcast #####
@app.route('/favorites_podcast', methods=['POST'])
@jwt_required()
def create_favorite_podcast():
    body = request.get_json(silent=True)
    print(body)
    if body is None:
        return jsonify({'msg': 'Send information in the body'}), 400
    
    
    user_email = get_jwt_identity()
    print(user_email)
    user = User.query.filter_by(email = user_email).first()
    print(user)
    user_id = user.id
    
    existing_relation = Favorite_Podcast.query.filter_by(user_id=user_id, podcast_id=body['podcast_id']).first()
    if existing_relation:
        return jsonify({'msg': 'Relation already exists'}), 400

    new_favorite_podcast = Favorite_Podcast(user_id=user_id, podcast_id=body['podcast_id'])
    db.session.add(new_favorite_podcast)
    db.session.commit()
    return jsonify({'msg': 'ok'}),200


##### endpoint para ver los favoritos de un usuario de la tabla de readings
@app.route('/favorites_readings', methods=['GET'])
@jwt_required()
def get_favorite_readings():
    user_email = get_jwt_identity()
    print(user_email)
    user = User.query.filter_by(email = user_email).first()
    print(user)
    user_id = user.id
    favorites_readings = Favorite_Readings.query.filter_by(user_id=user_id)
    favorites_readings_list = list(map(lambda favorite: favorite.serialize(), favorites_readings))
    return jsonify({'msg': 'ok', 'inf':favorites_readings_list}),200

##### endpoint para ver los favoritos de un usuario de la tabla de meditations
@app.route('/favorites_meditations', methods=['GET'])
@jwt_required()
def get_favorite_meditations():
    user_email = get_jwt_identity()
    print(user_email)
    user = User.query.filter_by(email = user_email).first()
    print(user)
    user_id = user.id
    favorites_meditations = Favorite_Meditations.query.filter_by(user_id=user_id)
    favorites_meditations_list = list(map(lambda favorite: favorite.serialize(), favorites_meditations))
    return jsonify({'msg': 'ok', 'inf':favorites_meditations_list}),200

##### endpoint para ver los favoritos de un usuario de la tabla de podcast
@app.route('/favorites_podcast', methods=['GET'])
@jwt_required()
def get_favorite_podcast():
    user_email = get_jwt_identity()
    print(user_email)
    user = User.query.filter_by(email = user_email).first()
    print(user)
    user_id = user.id
    favorites_podcast = Favorite_Podcast.query.filter_by(user_id=user_id)
    favorites_podcast_list = list(map(lambda favorite: favorite.serialize(), favorites_podcast))
    return jsonify({'msg': 'ok', 'inf':favorites_podcast_list}),200


##### endpoint para ver todos los favoritos de un usuario #####
@app.route('/user/<int:id_user>/favorites', methods=['GET'])
def get_favorites_user(id_user):
    favorite_readings = Favorite_Readings.query.filter_by(user_id = id_user)
    favorite_meditations = Favorite_Meditations.query.filter_by(user_id = id_user)
    favorite_podcast = Favorite_Podcast.query.filter_by(user_id = id_user)
    favorites_list = list(map(lambda favorite: favorite.serialize(), favorite_readings))
    favorites_list_1 = list(map(lambda favorite: favorite.serialize(), favorite_meditations))
    favorites_list_2 = list(map(lambda favorite: favorite.serialize(), favorite_podcast))
    favorites_list.extend(favorites_list_1)
    favorites_list.extend(favorites_list_2)
    return jsonify({'msg': 'ok', 'inf': favorites_list})


##### endpoint para eliminar un favorites_readings #####
@app.route('/favorites_readings/<int:favorites_readings_id>', methods=['DELETE'])
@jwt_required()
def delete_favorites_readings(favorites_readings_id):
    favorites_readings = Favorite_Readings.query.get(favorites_readings_id)
    if favorites_readings is None:
        raise APIException({'The id of readings:{} does not exist'.format(favorites_readings_id)}, status_code=400)
    db.session.delete(favorites_readings)
    db.session.commit()
    return jsonify({'msg':'ok'}), 200

##### endpoint para eliminar un favorites_podcast #####
@app.route('/favorites_podcast/<int:favorites_podcast_id>', methods=['DELETE'])
@jwt_required()
def delete_favorites_podcast(favorites_podcast_id):
    favorites_podcast = Favorite_Podcast.query.get(favorites_podcast_id)
    if favorites_podcast is None:
        raise APIException({'The id of podcast:{} does not exist'.format(favorites_podcast_id)}, status_code=400)
    db.session.delete(favorites_podcast)
    db.session.commit()
    return jsonify({'msg':'ok'}), 200

##### endpoint para eliminar un favorites_meditations #####
@app.route('/favorites_meditations/<int:favorites_meditations_id>', methods=['DELETE'])
@jwt_required()
def delete_favorites_meditations(favorites_meditations_id):
    favorites_meditations = Favorite_Meditations.query.get(favorites_meditations_id)
    if favorites_meditations is None:
        raise APIException({'The id of meditations:{} does not exist'.format(favorites_meditations_id)}, status_code=400)
    db.session.delete(favorites_meditations)
    db.session.commit()
    return jsonify({'msg':'ok'}), 200

##### endpoint para ver todos los usuarios de la tabla #####
@app.route('/user', methods=['GET'])
def get_users():
    users = User.query.all()  
    user_list = list(map(lambda user: user.serialize(), users))
    return jsonify(user_list), 200



##### endpoint para ver los datos de un usuario de la tabla #####
@app.route('/user/<int:user_id>', methods=['GET'])
def get_user_id(user_id):
    user = User.query.get(user_id)
    if user is None:
        return jsonify({'msg':'User not found'}), 400
    else:
        return jsonify({'msg':'ok','inf':user.serialize()})

##### endpoint para agregar un appointments
@app.route('/appointment/<int:freelancer_id>', methods=['POST'])
@jwt_required()
def create_appointments(freelancer_id):
    body = request.get_json(silent=True)
    print(body)
    if body is None:
        return jsonify({'msg': 'Send information in the body'}), 400
    if 'date' not in body:
        return ({'msg':'Send date in body'})
    if 'full_date' not in body:
        return ({'msg':'Send full_date in body'})
    
    
    user_email = get_jwt_identity()
    print(user_email)
    user = User.query.filter_by(email = user_email).first()
    print(user)
    user_id = user.id
    
    # full_date = body['full_date'].split('(')[0].strip()
    # fecha_objeto = datetime.strptime(full_date, "%a %b %d %Y %H:%M:%S")
    # full_date = fecha_objeto.strftime("%Y-%m-%d %H:%M:%S")
   

    #date = body['date'].split('(')[0].strip()
    # fecha_objeto = datetime.strptime(date, "%a %b %d %Y %H:%M:%S GMT%z")
    # date = fecha_objeto.strftime("%Y-%m-%d %H:%M:%S")

    
    # try:
       
    #     existing_appointments = Appointment.query.filter_by(freelancer_id=freelancer_id, date=body['date']).first()
    #     if existing_appointments:
    #         return jsonify({'msg': 'El freelancer esta ocupado'}), 400
    # except Exception as e:
    #     return jsonify({'msg': str(e)}), 500
    existing_appointments = Appointment.query.filter_by(freelancer_id=freelancer_id, date=body['date']).first()
    if existing_appointments:
        return jsonify({'msg': 'El freelancer esta ocupado'}), 400
        
    new_appointments = Appointment(user_id=user_id, freelancer_id=freelancer_id, date=body['date'], full_date=body['full_date'])
    db.session.add(new_appointments)
    db.session.commit()
    return jsonify({'msg': 'ok'}),200

#### endpoint para ver las citas de un usuario 
@app.route('/appointments', methods=['GET'])
@jwt_required()
def get_appointment():
    user_email = get_jwt_identity()
    print(user_email)
    user = User.query.filter_by(email = user_email).first()
    print(user)
    user_id = user.id
    appointments = Appointment.query.filter_by(user_id=user_id).all()
    appointments_list = list(map(lambda appointment: appointment.serialize(), appointments))
    return jsonify({'msg': 'ok', 'inf':appointments_list}),200

##### endpoint para actualizar en la tabla de citas #####
@app.route('/appointments/<int:appointment_id>', methods=['PUT'])
@jwt_required()
def update_appointment(appointment_id):
    appointment = Appointment.query.get(appointment_id)
    if appointment is None:
        return jsonify({'msg': 'The id of appointment:{} does not exist'.format(appointment_id)})
    body = request.get_json(silent=True)
    if body is None:
        return jsonify({'msg': 'Send information in the body'}), 400
    if 'date' in body:
        appointment.date = body['date']
    if 'full_date' in body:
        appointment.full_date= body['full_date']
    
    db.session.commit()
    return jsonify({'msg':'ok'}), 200

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)