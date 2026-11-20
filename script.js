const toggleBtn = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
const firstNameError = document.getElementById('firstName-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const contactForm = document.querySelector('#contact form');
const firstNameInput = document.getElementById('firstName');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('form-success');
const themeToggle = document.getElementById('theme-toggle')


if (toggleBtn){
toggleBtn.addEventListener('click', () => {
 const isOpen = navMenu.classList.toggle ('is-open')
 toggleBtn.setAttribute('aria-expanded', isOpen)
})

navMenu.addEventListener('click', e => {
  if (e.target.closest('a')) {
    navMenu.classList.remove('is-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
navMenu.classList.remove ('is-open')
toggleBtn.setAttribute('aria-expanded', false)    
toggleBtn.focus() }
})}


 
if (contactForm){
contactForm.addEventListener ('submit', e => {
    e.preventDefault();
    let isValid = true;
if (firstNameInput.value.trim() === '') {
    firstNameError.textContent = 'First name is required.';
    firstNameInput.setAttribute('aria-invalid', 'true');
    isValid = false;
} else {
    firstNameError.textContent = '';
    firstNameInput.setAttribute('aria-invalid', 'false');
}

 if (emailInput.value.trim() === ''){
    emailError.textContent = 'Email is required.';
     emailInput.setAttribute('aria-invalid', 'true');
    isValid = false;}
else if (!emailInput.checkValidity()) {
    emailError.textContent = 'Please enter a valid email address.';
     emailInput.setAttribute('aria-invalid', 'false');
    isValid = false;
}
  else {
    emailError.textContent = ''; 
}
 if (messageInput.value.trim () === '') {
    messageError.textContent = 'Message is required.';
    messageInput.setAttribute ('aria-invalid', 'true');
    isValid = false;}

    else {
        messageError.textContent = ''
    messageInput.setAttribute ('aria-invalid', 'false');

 }

if (isValid){
     contactForm.reset();
    successMessage.textContent = 'Thank you! Your submission has been received. (Note: This is a demo form, so no actual email is sent.)'
} else {
  successMessage.textContent =''}
})}


 if (themeToggle){
     const themeIcon = themeToggle.querySelector ('.theme-icon');
themeToggle.addEventListener ('click', () => {
 const isLight = document.body.classList.toggle('light-theme');
 themeIcon.textContent = isLight ? '🌙' : '☀️';
 
})
}
