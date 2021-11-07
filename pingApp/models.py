import re
from datetime import datetime
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from pingApp import app


db = SQLAlchemy(app)


class User(db.Model, UserMixin):
    phone = db.Column(db.String(32), primary_key = True,  unique=True)
    name = db.Column(db.String(32))
    address = db.Column(db.String(64))
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    messages = db.Column(db.String(320))
    
    def __repr__(self):
        return '<User %r>' % self.phone
        
