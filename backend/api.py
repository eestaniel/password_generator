from flask import Flask, request, jsonify
from flask_cors import CORS

import string
import secrets

app = Flask(__name__)
CORS(app)


@app.route('/generate-password', methods=['GET'])
def generate_password():
    length = request.args.get('length', default=8, type=int)
    characters = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(secrets.choice(characters) for i in range(length))

    return jsonify({'password': password})


if __name__ == '__main__':
    app.run(debug=True)
