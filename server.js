// Import required modules
const express = require('express');         // Express is a web framework for Node.js
const bodyParser = require('body-parser');  // Body-parser helps parse incoming JSON request bodies
const fs = require('fs');                   // File system module to read/write files

const app = express();                      // Create an Express app instance

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Serve static files (like index.html and form.js) from the current directory
app.use(express.static(__dirname));

// Handle POST requests to the '/submit' route
app.post('/submit', (req, res) => {
    const formData = req.body; // Get submitted form data from the request body

    let existingData = [];     // Initialize an array to hold existing form entries

    // If data.json file exists, read it and parse the existing data
    if (fs.existsSync('data.json')) {
        const content = fs.readFileSync('data.json'); // Read file content

        // If the file has content (not empty), parse the JSON data
        if (content.length) {
            existingData = JSON.parse(content);
        }
    }

    // Add the new form data to the array of existing data
    existingData.push(formData);

    // Write the updated array back to data.json file in pretty format
    fs.writeFileSync('data.json', JSON.stringify(existingData, null, 2));

    // Send a success response back to the frontend
    res.json({ message: 'Data saved!' });
});

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000"); // Log that the server is running
});
