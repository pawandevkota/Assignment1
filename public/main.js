
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); 
  
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('contact').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    document.getElementById('success-message').textContent = 'Your message has been sent successfully.';
    setTimeout(function () {
        document.getElementById('success-message').textContent = '';
        window.location.href = 'homeejs';
    }, 3000);
});