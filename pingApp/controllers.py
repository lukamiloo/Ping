from pingApp import app
from flask import render_template, request, session, redirect
app.secret_key = 'KEY'

@app.route('/random', methods=['POST', 'GET'])
def random():
    return render_template('random.html', message='')

