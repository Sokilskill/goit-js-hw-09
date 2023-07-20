import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  // console.log(event.currentTarget.value);

  if (emailInput.value === '' && messageInput.value === '') {
    return alert('Всі поля повинні бути заповнені!');
  } else if (emailInput.value === '') {
    return alert('Поле Email не може бути пустим');
  } else if (messageInput.value === '') {
    return alert('Поле Message не може бути пустим');
  } else if (messageInput.value.length < 6) {
    return alert('В полі Message має бути написано не менше 6 символів');
  }

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData);

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function readLocalStorage() {
  const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saveMessage) {
    emailInput.value = saveMessage.email;
    messageInput.value = saveMessage.message;
  }
}

readLocalStorage();
