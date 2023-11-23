
import click
from api.models import db, User, Readings, Meditations, Podcast, Freelancer, Events

"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    @app.cli.command("insert-test-users") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_users(count):
        print("Creating test users")
        for x in range(1, int(count) + 1):
            user = User()
            user.email = "test_user" + str(x) + "@test.com"
            user.password = "123456"
            user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")

    @app.cli.command("insert-tools")
    def insert_tools():
        readings = [
            {
        "URLPhoto": "https://m.media-amazon.com/images/I/51L5czVMZWL._SX342_SY445_.jpg",
        "download": "https://ia801004.us.archive.org/24/items/ArticulosMaxwell/John_C._Maxwell-Companeros_de_Oracion.pdf",
        "review": "Un libro para niños y adultos, que crecerán aprendiendo a identificar cualquier sentimiento y aprenderán a regularlos.",
        "title": "Emocionario."
        
    },
    {
        "URLPhoto": "https://pictures.abebooks.com/isbn/9780881135886-es.jpg",
        "download": "https://ia801004.us.archive.org/24/items/ArticulosMaxwell/El_lado_positivo_del_fracaso_PP_.pdf",
        "review": "Un libro que trata sobre las razones mas importantes por las que la gente fracasa y muestra como dominar el temor en lugar de ser dominado por el..",
        "title": "El lado positivo del fracaso."
    },
    {
        "URLPhoto": "https://m.media-amazon.com/images/I/61W5GvS86yL._AC_UF1000,1000_QL80_.jpg",
        "download": "https://formarse.com.ar/libros/Libros%20para%20descargar%20de%20maestros%20espirituales/El-cielo-es-el-limite.pdf",
        "review": "Es una obra llena de ingenio, sabiduría y sentido común, para abordar el propio cambio.",
        "title": "El cielo es el límite."
    },
    {
        "URLPhoto": "https://imgv2-1-f.scribdassets.com/img/document/264710817/original/41a802a076/1692910614?v=1",
        "download": "https://psicolebon.files.wordpress.com/2016/07/erich-fromm-el-arte-de-amar.pdf",
        "review": "En este libro el filósofo alemán nos explica qué significa amar y cómo desprendernos de nosotros mismos para experimentar ese sentimiento.",
        "title": "El arte de amar."
    },
    {
        "URLPhoto": "https://m.media-amazon.com/images/I/71Rvhmx+VZL._SY522_.jpg",
        "download": "https://c15208330.ssl.cf2.rackcdn.com/uploads/public/3f3a23b05a0dcb7e26f24fb69a9d899b.pdf",
        "review": "Un libro donde aprenderás acerca de los principios y valores en la comunicación.",
        "title": "Comunicación no violenta. "
    },
    {
        "URLPhoto": "https://0.academia-photos.com/attachment_thumbnails/54636634/mini_magick20190116-14863-ea6wv.png?1547659179",
        "download": "https://ia801004.us.archive.org/24/items/ArticulosMaxwell/John_C._Maxwell-Companeros_de_Oracion.pdf",
        "review": "Un libro que se centra en el poder de la oración y el benificio sobre las personas y las instituciones.",
        "title": "Compañeros de oración."
    }
    
]
        meditations = [
    {
        "URLVideo": "https://www.youtube.com/embed/YuEBtH_FWQk?si=coIln1W89--w6X9F",
        "title": "Soltar el ESTRÉS y la ANSIEDAD."
    },
    {
        "URLVideo": "https://www.youtube.com/embed/ifObMLAoNOc?si=7ypMecH2qj9NfZ2w",
        "title": "Meditación & Morning Yoga."
    },
    {
        "URLVideo": "https://www.youtube.com/embed/4evSg0AJDRE?si=x9iTIqlsdPlss1FG",
        "title": "Mover la energía del cuerpo."
    },
    {
        "URLVideo": "https://www.youtube.com/embed/gcfaCNeUx_g?si=UBsk0Of6dexZZ5Vn",
        "title": "Yoga en casa."
    },
    {
        "URLVideo": "https://www.youtube.com/embed/g4B6nn1Ll50?si=UU1o9mSrI_YbrQrM",
        "title": "Dormir profundamente."
    },
    {
        "URLVideo": "https://www.youtube.com/embed/kx8uFbUD5ts?si=7j71CLcY4F4kyFXL",
        "title": "Calmar la ansiedad."
    }
]
        podcast = [
    {
        "URLListen": "https://somosestupendas.com/introvertido/",
        "URLPhoto": "https://cdn.somosestupendas.com/psicologia/introvertido-portada.jpg",
        "title": "Introvertido: Cómo dejar de serlo."
    },
    {
        "URLListen":"https://www.listennotes.com/es/podcasts/mjpadillo/mis-herramientas-cuando-g4dvYjzBcwb/",
        "URLPhoto":"https://production.listennotes.com/podcasts/mjpadillo/mis-herramientas-cuando-eq39cT51f87-g4dvYjzBcwb.1400x1400.jpg",
        "title": "Ansiedad: mis herramientas."
    },
    {
        "URLListen":"https://open.spotify.com/episode/4lXfZa16adXinV0VqoBGY8",
        "URLPhoto":"https://hips.hearstapps.com/hmg-prod/images/podcast-salud-mental-psicologia-al-desnudo-1673294840.jpg?crop=1xw:1xh;center,top&resize=980:*",
        "title":"¿Cómo ayudar a alguien con depresión?"
    },
    {
        "URLListen":"https://open.spotify.com/episode/3z87R87rlXTrE9DNPJdwJE",
        "URLPhoto":"https://hips.hearstapps.com/hmg-prod/images/podcast-salud-mental-pracrtica-la-psicologia-positiva-1673294819.jpg?crop=1xw:1xh;center,top&resize=980:*",
        "title":"Aprender a hacer las cosas mal."
    },
    {
        "URLListen":"https://podcasts.apple.com/es/podcast/estr%C3%A9s-ansiedad-y-depresi%C3%B3n/id1501727318?i=1000629516044",
        "URLPhoto":"https://hips.hearstapps.com/hmg-prod/images/podcast-salud-mental-psicologiapara-todos-1673294865.jpg?crop=1xw:1xh;center,top&resize=980:*",
        "title":"Estrés, Ansiedad y Depresión."
    },
    {
        "URLListen":"https://somosestupendas.com/tecnicas-de-resolucion-de-conflictos/",
        "URLPhoto":"https://cdn.somosestupendas.com/psicologia/tecnicas-de-resolucion-de-conflictos.jpg",
        "title":"Resolución de conflictos."
    }
]
        freelancer = [
            { 
                "full_name":"Sara",
                "email":"sara@gmail.com",
                "age": 32,
                "URLphoto":"",
                "password":"Sara123456",
                "is_active":True,
                "professional_registration_number":123,
                "years_of_experience":12,
                "education": "Doctor en Psicologia Clinica",
                "expertise":"Duelo, educación, depresión.",
                "aboutme": "",
                "availability":""              
            },
            { 
                "full_name":"Jose",
                "email":"jose@gmail.com",
                "age": 35,
                "URLphoto":"",
                "password":"Sara123456",
                "is_active":True,
                "professional_registration_number":124,
                "years_of_experience":12,
                "education": "Doctor en Psicologia Clinica",
                "expertise":"Duelo, educación, depresión.",
                "aboutme": "",
                "availability":""              
            },
            {                 
                "full_name":"Ana",
                "email":"ana@gmail.com",
                "age": 40,
                "URLphoto":"",
                "password":"Sara123456",
                "is_active":True,
                "professional_registration_number":128,
                "years_of_experience":12,
                "education": "Doctor en Psicologia Clinica",
                "expertise":"Duelo, educación, depresión.",
                "aboutme": "",
                "availability":""              
            }

        ]
        events = [
            {
                "title":"Regalar",
                "date": "2023-12-25 17:00:00",
                "address":"Sol 54",
                "user_id":1
            },
             {
                "title":"Cuidar",
                "date": "2023-12-20, 12:00:00",
                "address":"Sol 100",
                "user_id":1
            },
            {
                "title":"Festejar",
                "date": "2023-12-30 21:00:00",
                "address":"Sol 54",
                "user_id":1
            }
        ]
        
        for datos in readings:
            reading = Readings()
            reading.URLPhoto = datos["URLPhoto"]
            reading.download = datos["download"]
            reading.review = datos["review"]
            reading.title = datos["title"]
            db.session.add(reading)
            db.session.commit()
        print("Readings inserted into the database.")

        for datos in podcast:
            podcast = Podcast()
            podcast.URLListen = datos["URLListen"]
            podcast.title = datos["title"]
            podcast.URLPhoto = datos["URLPhoto"]
            db.session.add(podcast)
            db.session.commit()
        print("Podcast inserted into the database.")

        for datos in meditations:
            meditations = Meditations()
            meditations.URLVideo = datos["URLVideo"]
            meditations.title = datos["title"]
            db.session.add(meditations)
            db.session.commit()
        print("Podcast inserted into the database.")
        
        for datos in freelancer:
            freelancer = Freelancer()
            freelancer.full_name = datos["full_name"]
            freelancer.email = datos["email"]
            freelancer.age = datos["age"]
            freelancer.URLphoto = datos["URLphoto"]
            freelancer.password = datos["password"]
            freelancer.is_active = datos["is_active"]
            freelancer.professional_registration_number = datos["professional_registration_number"]
            freelancer.years_of_experience = datos["years_of_experience"]
            freelancer.education = datos["education"]
            freelancer.aboutme = datos["aboutme"]
            freelancer.expertise = datos["expertise"]
            freelancer.availability = datos["availability"]
            db.session.add(freelancer)
            db.session.commit()
        print("Freelancer inserted into the database.")

        for datos in events:
            events = Events()
            events.date = datos["date"]
            events.title = datos["title"]
            events.address = datos["address"]
            events.user_id = datos["user_id"]
            db.session.add(events)
            db.session.commit()
        print("Events inserted into the database.")
        

# Para cargar base de datos pipenv run flask insert-tools

    @app.cli.command("insert-test-data")
    def insert_test_data():
        pass