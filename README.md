# Form Authentication with Node.js - Form to JSON

This project demonstrates a simple form submission process where data is collected from the frontend form, submitted via JavaScript, and saved to a JSON file on the backend using Node.js. This project uses a minimalistic setup to handle form data and persist it on the server.

## Project Structure


### Files:

- **index.html**: This file contains the HTML structure of the form. It includes fields where users can input their details and submit the form.

- **form.js**: This JavaScript file contains the logic for form submission. It handles the validation of form data and sends the data to the backend using a POST request.

- **server.js**: This is a Node.js server file that listens for requests from the frontend. It saves the submitted form data into a `data.json` file after the first form submission.

- **data.json**: This file stores the submitted form data in JSON format. It gets created after the first successful form submission.

## Features

- Frontend form to collect user data.
- JavaScript to handle the form submission asynchronously.
- Node.js server to receive form data and save it to `data.json`.
- A minimal and easy-to-understand example of form handling and persistence.


