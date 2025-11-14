const refs = {
  textInput: document.querySelector('#name-input'),
  textOutput: document.querySelector('#name-output'),
};

refs.textInput.addEventListener('input', event => {
  if (event.currentTarget.value.trim() === '') {
    refs.textOutput.textContent = 'Anonymous';
  } else refs.textOutput.textContent = event.currentTarget.value.trim();
});
