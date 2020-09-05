function sendMail(contactForm) {
    emailjs.send("GMAIL","Abbott_Travel_Guide", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "comment": contactForm.comment.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}