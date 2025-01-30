document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('downloadCV').addEventListener('click', function () {
        const link = document.createElement('a');
        link.href = 'assets/resume.pdf';
        link.download = 'Rajat_Jain_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    emailjs.init("9y8frn3UMg6qAEUNG");

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = {
            first_name: document.getElementById("first-name").value,
            last_name: document.getElementById("last-name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        };

        emailjs.send("service_mpegu3i", "template_gawiu5k", formData)
            .then(response => {
                console.log("Successfully Send to Rajat Jain", response);
                alert("Message Successfully send to Rajat Jain!");
                document.getElementById("contact-form").reset();
            })
            .catch(error => {
                console.error("FAILED...", error);
                alert("Error sending message. Check console for details.");
            });
    });
});