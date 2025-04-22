$(document).ready(function () {
    $("#btnSubmit").click(function (e) {
        e.preventDefault(); // Don't reload the page

        let formData = {};
        let formArray = $("#myform").serializeArray();

        // Convert to JSON object
        $.each(formArray, function () {
            formData[this.name] = this.value;
        });

        // Send data to server
        fetch("/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert("Form saved successfully!");
            console.log(data);
        })
        .catch(error => console.error("Error:", error));
    });
});
