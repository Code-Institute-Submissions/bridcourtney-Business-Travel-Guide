function sendMail(contactForm) {
    emailjs.send("GMAIL", "Abbott_Travel_Guide", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "comment": contactForm.comment.value
        })
        .then(
            function(_response) {
                alert('Email sent successfully');
                window.location.href = ("https://8000-a31cd9b5-db9e-4a8a-9c5e-b0b909895b79.ws-eu03.gitpod.io/");
            },
            function(_error) {
                alert('email not sent. Please try again');

            }
        );

    return false; // To block from loading a new 

}