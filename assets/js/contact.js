function sendMail(event) {
    event.preventDefault();

    let params = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        subject: document.getElementById("subject").value.trim(),
        message: document.getElementById("message").value.trim()
    };

    console.log("Submitted parameters:", params);

    if (!params.name || !params.email || !params.subject || !params.message) {
        alert("All fields are required!");
        return;
    }

    emailjs
        .send("service_y48zmy2", "template_omj3rkq", params)
        .then(
            function (response) {
                console.log("Email sent successfully!", response);
                alert("Email sent successfully!");
            },
            function (error) {
                console.error("Error while sending the email:", error);
                alert("An error occurred while sending the email. Please try again later.");
            }
        );
}