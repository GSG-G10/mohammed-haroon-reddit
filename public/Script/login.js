const message = document.querySelector('.message');
const username = document.querySelector('.username');
const inputPassword = document.getElementById('password');
const signupForm = document.querySelector('.form-main');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (username.value === '') {
    message.textContent = 'User Name should not be empty';
  } else if (inputPassword.value === '') {
    message.textContent = ' password should not be empty';
  } else {
    signupForm.submit();
  }
});
