document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirm-email').value;

    if (email !== confirmEmail) {
        alert('Email addresses do not match.');
    } else {
        alert('Form submitted successfully!');
    }
});
