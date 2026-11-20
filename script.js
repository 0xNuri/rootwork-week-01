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
const themetoggle = document.getElementById('theme-toggle')


if (toggleBtn){
toggleBtn.addEventListener('click', () => {
 const isOpen = navMenu.classList.toggle ('is-open')
 toggleBtn.setAttribute('aria-expanded', isOpen)
})

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
const isNotOpen = navMenu.classList.remove ('is-open')
toggleBtn.setAttribute('aria-expanded', false)    
toggleBtn.focus() }
})}
 
if (contactForm){
contactForm.addEventListener ('submit', e => {
    e.preventDefault();
    let isValid = true;
if (firstNameInput.value.trim() === '') {
    firstNameError.textContent = 'First name is required.';
    isValid = false;
} else {
    firstNameError.textContent = '';
}

 if (emailInput.value.trim() === ''){
    emailError.textContent = 'Email is required.';
    isValid = false;'' }
else if (!emailInput.checkValidity()) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
}
  else {
    emailError.textContent = ''; 
}
 if (messageInput.value.trim () === '') {
    messageError.textContent = 'Message is required.';
    isValid = false;}
    else {
        messageError.textContent = ''
 }

if (isValid){
    successMessage.textContent = 'Thank you!, your submission has been recieved. (Note: This is a demo form, No actual email is sent.)'
    contactForm.reset();
}

if (!isValid) {
  successMessage.textContent ='' }
}
)
}


 if (themetoggle){
themetoggle.addEventListener ('click', () => {
 const lightmode = document.body.classList.toggle('light-theme');
 const themeIcon = themetoggle.querySelector ('.theme-icon');
 themeIcon.textContent = lightmode ? '🌙' : '☀️';
 
})
}
