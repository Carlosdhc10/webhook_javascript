# WebHooks Tester 🚀

This is a simple project to test and simulate sending events (WebHooks) to a server. The frontend allows the user to send an event to a WebHook server and view the server's response.

## Technologies 💡

- Backend: Node.js with Express
- Frontend: HTML, CSS, JavaScript
- Server: Express (Server that listens and responds to WebHooks)

## Description

This project includes a frontend that allows users to send events to a WebHook server configured at a URL. The server processes the event and returns a response, which is displayed on the frontend.

When you click the Send Event button, an event with a message and a timestamp is sent to the server. The server's response is displayed in the Server Response text area.

## Installation

To run this project on your local machine, follow these steps:

### 1. Clonar el repositorio

```bash
git clone https://github.com/Carlosdhc10/webhook_javascript.git
cd webhooks-tester
```

### 2. Install dependencies
First, make sure you have Node.js installed. Then, install the required dependencies:

```bash
npm install
```

3. Start the server
Once the dependencies are installed, start the WebHook server:

```bash
node server.js
```

The server will be running at http://localhost:3000. 🌐

### 4. Test the client

To test the frontend, open the index.html file in your browser and use the buttons to send events to the server. 🎯

## Usage 📝
-Send an event: When you click the "Send WebHook" button, the client sends a POST request to the WebHook server with specific event data. 🚀
-View the result: The server processes the request and responds with a confirmation message. ✔️

## Contribution 🤝
If you wish to contribute to the project, please open an "Issue" or submit a "Pull Request". We appreciate any suggestions or improvements! ✨

## License 📝
This project is licensed under the MIT License. See the LICENSE file for more details. 🔓
