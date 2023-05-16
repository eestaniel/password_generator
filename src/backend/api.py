from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import os
import string
import secrets
import signal

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes


@app.route("/generate-password", methods=["POST", "GET"])
@cross_origin()
def helloWorld():
    data = request.get_json()

    length = int(data.get('length', 8))
    characters = ''
    if data.get('lowercase'):
        characters += string.ascii_lowercase
    if data.get('uppercase'):
        characters += string.ascii_uppercase
    if data.get('numbers'):
        characters += string.digits
    if data.get('symbols'):
        characters += string.punctuation

    password = ''.join(secrets.choice(characters) for i in range(length))

    return jsonify({'password': password})


if __name__ == '__main__':
    try:
        app.run(debug=True)
    except (SystemExit, KeyboardInterrupt):
        os.kill(os.getpid(), signal.SIGINT)
