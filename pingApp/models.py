import re
from datetime import datetime
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from pingApp import app


db = SQLAlchemy(app)


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(320), unique=True)
    phone = db.Column(db.String(320), unique=True)
    latitude = db.Column(db.double, unique=True)
    longitude = db.Column(db.double, unique=True)
    degrees = db.Column(db.double,unique=True)
    
    

    def __repr__(self):
        return '<User %r>' % self.phone
        
