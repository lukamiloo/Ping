from pingApp.models import db, User


def profile(name, phone, address):
    user = User(phone=phone, name=name,address=address)
    db.add(user)
    db.commit()