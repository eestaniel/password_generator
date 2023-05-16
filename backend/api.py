from flask import Flask, request, jsonify
from flask_cors import CORS

import string
import secrets

app = Flask(__name__)
CORS(app)


@app.route('/generate-password', methods=['POST'])
def generate_password():
    data = request.get_json()

    length = data.get('length', 8)
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
    app.run(debug=True)
