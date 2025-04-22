// This code runs only after the entire HTML page has fully loaded
$(document).ready(function () {

    // When the button with id="btnSubmit" is clicked
    $("#btnSubmit").click(function (e) {

        // Prevents the default form submission behavior (which reloads the page)
        e.preventDefault();

        // Create an empty object to hold the form data in key-value format
        let formData = {};

        // Serialize form data from the form with id="myform"
        // This turns form inputs into an array of objects like [{name: 'username', value: 'Pranav'}, ...]
        let formArray = $("#myform").serializeArray();

        // Loop through each element in formArray and convert it to a key-value format
        $.each(formArray, function () {
            formData[this.name] = this.value;
        });

        // Send the JSON data to the server using fetch API
        fetch("/submit", {
            method: "POST", // HTTP method
            headers: { 
                "Content-Type": "application/json" // Tell the server you're sending JSON
            },
            body: JSON.stringify(formData) // Convert JS object to JSON string
        })

        // Handle the server response (if server returns JSON)
        .then(response => response.json())

        // Show success message and log returned data in the console
        .then(data => {
            alert("Form saved successfully!");
            console.log(data);
        })

        // If there's an error with the request, log it to the console
        .catch(error => console.error("Error:", error));
    });
});
