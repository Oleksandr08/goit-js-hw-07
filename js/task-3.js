const myInput = document.querySelector('#name-input');
const myOutput = document.querySelector('#name-output');

myInput.addEventListener('input', () => {
  const trimmedValue = myInput.value.trim();
  myOutput.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});