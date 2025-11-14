const form = document.querySelector('.login-form');

function handleSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  } else {
    {
      const loginData = {
        email: email,
        password: password,
      };
      console.log(loginData);
    }
  }
  event.target.reset();
}

form.addEventListener('submit', handleSubmit);
