function sendMail(contactForm) {
    emailjs.send("GMAIL","Abbott_Travel_Guide", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "comment": contactForm.comment.value
    })
    .then(
        function(_response) {
            alert('Email sent successfully');
           
        },
        function(_error) {
            alert('email not sent. Please try again');

        }
    );

    return false;  // To block from loading a new 
   
}