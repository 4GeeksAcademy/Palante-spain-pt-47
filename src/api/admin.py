import os
from flask_admin import Admin
from .models import db, User, Freelancer, Order, Tasks, Appointment, Readings, Podcast, Meditations, Favorite_Meditations, Favorite_Podcast, Favorite_Readings, Events, Attendees_event
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Freelancer, db.session))
    admin.add_view(ModelView(Order, db.session))
    admin.add_view(ModelView(Tasks, db.session))
    admin.add_view(ModelView(Appointment, db.session))
    admin.add_view(ModelView(Readings, db.session))
    admin.add_view(ModelView(Podcast, db.session))
    admin.add_view(ModelView(Meditations, db.session))
    admin.add_view(ModelView(Favorite_Meditations, db.session))
    admin.add_view(ModelView(Favorite_Podcast, db.session))
    admin.add_view(ModelView(Favorite_Readings, db.session))
    admin.add_view(ModelView(Events, db.session))
    admin.add_view(ModelView(Attendees_event, db.session))
    
    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))