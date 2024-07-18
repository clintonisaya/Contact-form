
document.addEventListener('submit', function(event) {
  event.preventDefault();
  let isValid = true;
  const errorelements = document.querySelectorAll('.error')
  errorelements.forEach(element => element.style.display = 'none');

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
    setTimeout(function(){
      document.getElementById('form').reset();
      alert('Form submitted successfully!');
    }, 1000);
    
  }
});