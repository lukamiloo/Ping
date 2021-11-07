from pingApp.models import db, User


def profile(name, phone, address):
    user = User(phone=phone, name=name,address=address)
    db.add(user)
    db.commit()

def location(longitude, latitude, phone):
    user = User.query.filter_by(phone = phone).all()
    temp = User(phone = user.phone, longitude = longitude, latitude = latitude)
    db.add(user)
    db.commit()

def message(message):
    user = User(message = message)
    db.add(user)
    db.commit()