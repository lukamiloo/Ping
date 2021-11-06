from pingApp import app
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy_imageattach.entity import Image, image_attachment

db = SQLAlchemy(app)

class Location(db.Model):
    id = db.Column(db.String(36), primary_key=True)


class boilerPlate(db.Model):
    id = db.Column(db.String(36), primary_key=True)



db.create_all()