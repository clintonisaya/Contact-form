document.addEventListener('DOMContentLoaded', function() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => element.style.display = 'none');
  });

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let isValid = true;
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => element.style.display = 'none');

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const queryType = document.querySelector('input[name="query-type"]:checked');
    const message = document.getElementById('message').value;
    const consent = document.getElementById('consent').checked;

    if (!firstName) {
      document.getElementById('error-first-name').style.display = 'block';
      isValid = false;
    }
    if (!lastName) {
      document.getElementById('error-last-name').style.display = 'block';
      isValid = false;
    }
    if (!email || !email.includes('@')) {
      document.getElementById('error-email').style.display = 'block';
      isValid = false;
    }
    if (!queryType) {
      document.getElementById('error-query-type').style.display = 'block';
      isValid = false;
    }
    if (!message) {
      document.getElementById('error-message').style.display = 'block';
      isValid = false;
    }
    if (!consent) {
      document.getElementById('error-consent').style.display = 'block';
      isValid = false;
    }

    if (isValid) {
      
      alert('Form submitted successfully!');
    }
  });