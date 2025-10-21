const form = document.getElementById('contactForm');

const showError = (errorId, errorText) => {
  const errorElement = document.getElementById(errorId);
  errorElement.textContent = errorText;
  errorElement.style.color = 'red';
  errorElement.style.display = errorText ? 'block' : 'none';
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let success = true;

  const name = form.elements['name'].value.trim();
  const email = form.elements['email'].value.trim();
  const subject = form.elements['subject'].value.trim();
  const message = form.elements['message'].value.trim();

  showError('err-name', name ? '' : 'Name is required.');
  showError(
    'err-email',
    email && /^[^\s@]+s@[^\s@]+\.[^\s@]+$/.test(email)
      ? ''
      : 'Valid email is required.'
  );
  showError('err-subject', subject ? '' : 'Subject is required.');
  showError('err-message', message ? '' : 'Message is required.');

  success =
    name &&
    email &&
    /^[^\s@]+s@[^\s@]+\.[^\s@]+$/.test(email) &&
    subject &&
    message.length >= 10;

  if (success) {
    alert('Form submitted successfully!');
    form.reset();
  } else {
    document.getElementById('success-message').style.display = 'none';
  }
});
