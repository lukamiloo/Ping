from flask import flask, jsonify, request
from pingApp.backend import *
from pingApp.models import *

app = Flask(__name__)

@app.route('/message', methods=['GET', 'POST'])
def getMessage():
    if flask.request.method == 'POST':
        message = flask.request.values.get('input')
        messagedb(message)
    resp = jsonify(message)
    return resp

@app.route('/loc', methods = ['GET', 'POST'])
def getLocation():
    if flask.request.method == 'POST':
        longitude = flask.request.values.get('')
        latitude = flask.request.values.get('')
        phone = flask.request.values.get('')
        locationdb(longitude, latitude, phone)

FLASK_PORT = 5000

if __name__ == "__main__":
    app.run(debug=True, port=FLASK_PORT)