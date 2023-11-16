from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import DateTime
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(60), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    URLphoto = db.Column(db.String(200), unique=False, nullable=True, default=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "full_name":self.full_name,
            "email": self.email,
            #"URLphoto":self.URLpURLPhotohoto
            # do not serialize the password, its a security breach
        }
    
class Freelancer(db.Model):
    __tablename__ = 'freelancer'
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(80), unique=True, nullable=False)
    age = db.Column(db.Integer, unique=False, nullable=False)
    URLphoto = db.Column(db.String(200), unique=False, nullable=True, default='https://www.eloccidental.com.mx/incoming/gvhext-richard-burlton-htpmedsyzag-unsplash.jpg/ALTERNATES/LANDSCAPE_768/richard-burlton-HTpmedSyZag-unsplash.jpg')
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    professional_registration_number = db.Column(db.Integer, unique=True)
    years_of_experience = db.Column(db.String(20), unique=False)
    education = db.Column(db.String(120), unique=False)
    expertise = db.Column(db.String(200), unique=False)
    aboutme = db.Column(db.String(300), unique=False, nullable=True)
    availability = db.Column(db.JSON, nullable=True)
    
    def _repr_(self):
        return 'Freelance {}'.format(self.full_name)
    
    def serialize(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "age": self.age,
            "email": self.email,
            "professional_registration_number": self.professional_registration_number,
            "years_of_experience": self.years_of_experience,
            "education": self.education,
            "expertise": self.expertise,
            "URLphoto": self.URLphoto,
            "aboutme": self.aboutme,
            "availability": self.availability
            # do not serialize the password, its a security breach
        }
    
class Tasks(db.Model):
    __tablename__ = 'tasks'
    id = db.Column(db.Integer, primary_key=True)
    tasks = db.Column(db.String(200))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user_relationship = db.relationship(User)

    def __repr__(self):
        return '<Tasks %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "tasks": self.tasks,
            "user_id": self.user_id,
        }
    
class Appointment(db.Model):
    __tablename__ = 'appointment'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user_data = db.relationship(User)
    freelancer_id = db.Column(db.Integer, db.ForeignKey('freelancer.id'))
    freelancer_data = db.relationship(Freelancer)
    day = db.Column(db.String(10), nullable=False)
    time = db.Column(db.Time, nullable=False)
    full_date = db.Column(db.DateTime, nullable=True)
    
    def _repr_(self):
        return 'Appointment {}'.format(self.id)
    
    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "freelance_id": self.freelance_id,
            "day": self.day,
            "time": self.time.strftime('%H:%M'),
            "full_date": self.full_date.strftime('%Y-%m-%d %H:%M:%S') if self.full_date else None
        }

class Meditations(db.Model):
    __tablename__ = 'meditations'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    URLVideo = db.Column(db.String(200), unique=False, nullable=False)
    
    def __repr__(self):
        return '<Meditations %r>' % self.id    
    
    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
             "URLVideo": self.URLVideo,
        }
    
class Podcast(db.Model):
    __tablename__ = 'podcast'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    URLPhoto = db.Column(db.String(200), unique=False, nullable=False)
    URLListen = db.Column(db.String(200), unique=False, nullable=False)
    
    def __repr__(self):
        return '<Podcast %r>' % self.id    
    
    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "URLPhoto": self.URLPhoto,
            "URLListen": self.URLListen
        }
    
class Readings(db.Model):
    __tablename__ = 'readings'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    review = db.Column(db.String(300))
    URLPhoto = db.Column(db.String(200), unique=False, nullable=False)
    download = db.Column(db.String(200), unique=False, nullable=True)
    def __repr__(self):
        return '<User %r>' % self.id
    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "review": self.review,
            "URLPhoto":self.URLPhoto,
            "download":self.download
        }
    
class Favorite_Readings(db.Model):
    __tablename__ = 'favorite_readings'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user_relationship = db.relationship(User)
    reading_id = db.Column(db.Integer, db.ForeignKey('readings.id'))
    reading_relationship = db.relationship(Readings)
    def __repr__(self):
        return '< Favorite_Readings %r>' % self.id    
    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "reading_id":self.reading_id,
        }

class Favorite_Meditations(db.Model):
    __tablename__ = 'favorite_meditations'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user_relationship = db.relationship(User)
    meditations_id = db.Column(db.Integer, db.ForeignKey('meditations.id'))
    meditations_relationship = db.relationship(Meditations)
    
    def __repr__(self):
        return '< Favorite_Meditations %r>' % self.id    
    
    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "meditations_id":self. meditations_id,
        }

class Favorite_Podcast(db.Model):
    __tablename__ = 'favorite_podcast'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user_relationship = db.relationship(User)
    podcast_id = db.Column(db.Integer, db.ForeignKey('podcast.id'))
    podcast_relationship = db.relationship(Podcast)

    def __repr__(self):
        return '< Favorite_Podcast %r>' % self.id    
    
    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "podcast_id":self. podcast_id,
        }

class Events(db.Model):
    __tablename__ = 'events'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    address = db.Column(db.String(120), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user_relationship = db.relationship(User)
     
    def __repr__(self):
        return '<Events %r>' % self.id    
    
    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "date": self.date,
            "address": self.address,
            "user_data": self.user_relationship.serialize()
        }
    
class Attendees_event(db.Model):
    __tablename__ = 'attendees_event'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user_relationship = db.relationship(User)
    events_id = db.Column(db.Integer, db.ForeignKey('events.id'))
    events_relationship = db.relationship(Events)

    def __repr__(self):
        return '<Attendees_event%r>' % self.id    
    
    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "events_id": self.events_id
        }
    
class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.String(50), nullable=False)