const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serve index.html and form.js

app.post('/submit', (req, res) => {
    const formData = req.body;

    // Check if data.json exists and has an array
    let existingData = [];
    if (fs.existsSync('data.json')) {
        const content = fs.readFileSync('data.json');
        if (content.length) {
            existingData = JSON.parse(content);
        }
    }

    // Add new entry
    existingData.push(formData);

    // Save back to file
    fs.writeFileSync('data.json', JSON.stringify(existingData, null, 2));
    res.json({ message: 'Data saved!' });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
