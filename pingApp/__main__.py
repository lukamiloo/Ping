from pingApp import app
from pingApp.models import *
from pingApp.controllers import *
from pingApp.backend import *

"""
This file runs the server at a given port
"""
FLASK_PORT = 8081

if __name__ == "__main__":
    app.run(debug=True, port=FLASK_PORT)
