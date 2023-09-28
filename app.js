const signUpBtn = document.querySelector('.sign-up-btn');
const signInBtn = document.querySelector('.sign-in-btn')
const rightSignUpContainer = document.querySelector('.right-sign-up-container');
const rightAuth = document.querySelector('.right-auth');
const leftAuth = document.querySelector('.left-auth');
const whiteSign = document.querySelector('.white-sign');
const alternativeSign = document.querySelector('.alternative-sign');
const inputsContainer = document.querySelector('.inputs-container');
const forgotPassword = document.querySelector('.forgot-password');
const whiteSignBtn = document.querySelector('.white-sign-btn');

signUpBtn.addEventListener('click', () => {
    rightSignUpContainer.style.marginLeft = '-32rem';
    rightAuth.classList.add('right-auth-active');
    leftAuth.classList.add('left-auth-active');
    
    setTimeout(() => {
        whiteSign.textContent = 'Create Account';
        alternativeSign.textContent = 'or use your email for registeration';
        const nameInput = document.createElement('input');
        nameInput.classList.add('name-input');
        nameInput.placeholder = 'Name';
        inputsContainer.append(nameInput);
        inputsContainer.style.flexDirection = 'column-reverse';
        forgotPassword.style.display = 'none';
        whiteSignBtn.textContent = 'SIGN UP';
    }, 300);
});

signInBtn.addEventListener('click', () => {
    rightSignUpContainer.style.marginLeft = '32rem';
    rightAuth.classList.remove('right-auth-active');
    leftAuth.classList.remove('left-auth-active');
    
    setTimeout(() => {
        whiteSign.textContent = 'Sign In';
        alternativeSign.textContent = 'or use your email password';
        document.querySelector('.name-input').remove();
        inputsContainer.style.flexDirection = 'column';
        forgotPassword.style.display = 'block';
        whiteSignBtn.textContent = 'SIGN IN';
    }, 300);
});