# Password Generator

Password Generator is an Electron application that generates secure passwords based on user preferences.

## Screenshots

![Example Image](./src/bin/imgs/password%20generator.png)

## Features

- Generate a password with a custom length up to 256 characters.
- Include uppercase letters, lowercase letters, numbers, and symbols.
- Copy the generated password to the clipboard.

## Technology Stack

- [Electron](https://www.electronjs.org/) for the desktop application.
- [Flask](https://flask.palletsprojects.com/en/2.0.x/) for the backend API.
- [Bootstrap](https://getbootstrap.com/) for the UI.

## How to Run Locally

1. Clone the repository to your local machine.

2. Install the required packages for the Electron app and the Flask API

```shell
npm install
```

3. Run the Electron app:

```shell
npm start
```

You should now see the Password Generator application window on your screen.

## Project Structure

- `main.js`: This is the main Electron file. It creates the application window and handles system events.
- `index.html`: This is the main HTML file for the Electron app. It contains the UI for the password generator.
- `generate_password.js`: This is the JavaScript file that handles password generation. It sends a POST request to the Flask API and updates the UI with the generated password.
- `api.py`: This is the Flask API that generates the password. It receives a POST request with the password preferences, generates the password, and sends it back in the response.



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)