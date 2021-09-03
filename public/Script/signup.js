const message = document.querySelector('.message');
const inputFullName = document.querySelector('.input-full-name');
const inputUsername = document.querySelector('.input-username');
const inputEmail = document.querySelector('.input-email');
const inputPassword = document.getElementById('password');
const inputConfirmPassword = document.getElementById('confirmPassword');
const signupForm = document.querySelector('.signup-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputFullName.value === '') {
    message.textContent = 'Name should not be empty';
  } else if (inputUsername.value === '') {
    message.textContent = 'User Name should not be empty';
  } else if (inputEmail.value === '') {
    message.textContent = 'Email should not be empty';
  } else if (!inputEmail.value.includes('@')) {
    message.textContent = 'Enter correct email address';
  } else if (inputPassword.value === '') {
    message.textContent = ' password should not be empty';
  } else if (inputConfirmPassword.value === '') {
    message.textContent = ' confirm password should not be empty';
  } else if (inputConfirmPassword.value !== inputPassword.value) {
    message.textContent = 'password dows not match';
  } else {
    signupForm.submit();
  }
});
