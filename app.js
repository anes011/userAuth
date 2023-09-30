const authContainer = document.querySelector('.authentication-container');
const purpleSignUpBtn = document.querySelector('.purple-sign-up-btn');
const purpleSignInBtn = document.querySelector('.purple-sign-in-btn');
const purpleSignUpContainer = document.querySelector('.purple-sign-up-container');
const purpleAuth = document.querySelector('.purple-auth');
const whiteAuth = document.querySelector('.white-auth');
const whiteSign = document.querySelector('.white-sign');
const alternativeSign = document.querySelector('.alternative-sign');
const inputsContainer = document.querySelector('.inputs-container');
const forgotPassword = document.querySelector('.forgot-password');
const whiteSignBtn = document.querySelector('.white-sign-btn');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const logError = document.querySelector('.log-error');

//regex for input validity check
const emailRegex = /@[a-z]{2,}.*\.[a-z]{2,}/;
const passwordRegex = /^.{8,}$/;
//end of regex


purpleSignUpBtn.addEventListener('click', () => {
    purpleSignUpContainer.style.marginLeft = '-32rem';
    purpleAuth.classList.add('purple-auth-active');
    whiteAuth.classList.add('white-auth-active');
    logError.style.display = 'none';
    
    setTimeout(() => {
        whiteSign.textContent = 'Create Account';
        alternativeSign.textContent = 'or use your email for registeration';
        const nameInput = document.createElement('input');
        nameInput.classList.add('name-input');
        nameInput.placeholder = 'Name';
        inputsContainer.append(nameInput);
        inputsContainer.style.flexDirection = 'column-reverse';
        forgotPassword.style.display = 'none';
        whiteSignBtn.style.display = 'none';
        const whiteSignBtnNew = document.createElement('button');
        whiteSignBtnNew.classList.add('white-sign-btn-new');
        whiteSignBtnNew.textContent = 'SIGN UP';
        whiteAuth.append(whiteSignBtnNew);


        whiteSignBtnNew.addEventListener('click', () => {
            if (emailRegex.test(emailInput.value) && passwordRegex.test(passwordInput.value) && nameInput.value !== '') {
                whiteSignBtnNew.innerHTML = '<div class="loading"><div class="overlay"></div></div>';
                setTimeout(() => {
                    authContainer.style.display = 'flex';
                    authContainer.style.justifyContent = 'center';
                    authContainer.style.alignItems = 'center';
                    authContainer.style.flexDirection = 'column';
                    authContainer.style.padding = '3rem';
                    authContainer.style.overflow = 'visible';


                    authContainer.innerHTML = `
                    <img class="greet-avatar" src="pngwing.com.png">
                    <img class="rocket" src="rocket_2896891.png" alt="">
                    <div class="greeting-container">
                        <h1>Hey ${nameInput.value.toUpperCase()}!</h1>
                        <img src="Google-Noto-Emoji-People-Bodyparts-12050-waving-hand.svg" alt="">
                    </div>
                    <h1>Welcome to our app</h1>
                    <p class="greet-desc">Let's start with a quick product tour and we will have you up and running in no time!</p>
                    <a class="get-started-btn" href="./store page/store.html">Get started</a>
                    <svg class="squiggly-1" width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' opacity='0'/>
                        <g transform="matrix(0.83 0 0 0.83 12 12)" >
                            <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill-rule: nonzero; opacity: 1;" transform=" translate(-15, -15)" d="M 25.984375 2.9863281 C 25.43285884300673 2.99494917319965 24.9924473355562 3.4484681771760246 25 3.999999999999999 L 25 4.6679688 C 25 5.7846347 24.116666 6.6679688 23 6.6679688 L 21.666016 6.6679688 C 19.468682 6.6679688 17.666016 8.4706345 17.666016 10.667969 L 17.666016 12 C 17.666016 13.116666 16.782682 14 15.666016 14 L 14.332031 14 C 12.134697 14 10.332031 15.802666 10.332031 18 L 10.332031 19.332031 C 10.332031 20.448697 9.4486973 21.332031 8.3320312 21.332031 L 7 21.332031 C 4.8026661 21.332031 3 23.134697 3 25.332031 L 3 26 C 2.994899710454515 26.360635916577568 3.184375296169332 26.696081364571608 3.495872849714331 26.877887721486516 C 3.8073704032593296 27.059694078401428 4.192629596740671 27.059694078401428 4.50412715028567 26.877887721486516 C 4.815624703830668 26.696081364571608 5.005100289545485 26.360635916577568 5 26 L 5 25.332031 C 5 24.215365 5.8833339 23.332031 7 23.332031 L 8.3320312 23.332031 C 10.529365 23.332031 12.332031 21.529365 12.332031 19.332031 L 12.332031 18 C 12.332031 16.883334 13.215365 16 14.332031 16 L 15.666016 16 C 17.86335 16 19.666016 14.197334 19.666016 12 L 19.666016 10.667969 C 19.666016 9.5513024 20.54935 8.6679688 21.666016 8.6679688 L 23 8.6679688 C 25.197334 8.6679688 27 6.8653027 27 4.6679688 L 27 4 C 27.003701433733635 3.729699684396449 26.897823285435063 3.469413389385951 26.706490296584608 3.278448343881242 C 26.515157307734153 3.0874832983765335 26.25466768994374 2.982106371676088 25.984375 2.9863281 z" stroke-linecap="round" fill="blueviolet"/>
                        </g>
                    </svg>
                    <svg class="squiggly-2" width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' opacity='0'/>
                        <g transform="matrix(0.83 0 0 0.83 12 12)" >
                            <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill-rule: nonzero; opacity: 1;" transform=" translate(-15, -15)" d="M 25.984375 2.9863281 C 25.43285884300673 2.99494917319965 24.9924473355562 3.4484681771760246 25 3.999999999999999 L 25 4.6679688 C 25 5.7846347 24.116666 6.6679688 23 6.6679688 L 21.666016 6.6679688 C 19.468682 6.6679688 17.666016 8.4706345 17.666016 10.667969 L 17.666016 12 C 17.666016 13.116666 16.782682 14 15.666016 14 L 14.332031 14 C 12.134697 14 10.332031 15.802666 10.332031 18 L 10.332031 19.332031 C 10.332031 20.448697 9.4486973 21.332031 8.3320312 21.332031 L 7 21.332031 C 4.8026661 21.332031 3 23.134697 3 25.332031 L 3 26 C 2.994899710454515 26.360635916577568 3.184375296169332 26.696081364571608 3.495872849714331 26.877887721486516 C 3.8073704032593296 27.059694078401428 4.192629596740671 27.059694078401428 4.50412715028567 26.877887721486516 C 4.815624703830668 26.696081364571608 5.005100289545485 26.360635916577568 5 26 L 5 25.332031 C 5 24.215365 5.8833339 23.332031 7 23.332031 L 8.3320312 23.332031 C 10.529365 23.332031 12.332031 21.529365 12.332031 19.332031 L 12.332031 18 C 12.332031 16.883334 13.215365 16 14.332031 16 L 15.666016 16 C 17.86335 16 19.666016 14.197334 19.666016 12 L 19.666016 10.667969 C 19.666016 9.5513024 20.54935 8.6679688 21.666016 8.6679688 L 23 8.6679688 C 25.197334 8.6679688 27 6.8653027 27 4.6679688 L 27 4 C 27.003701433733635 3.729699684396449 26.897823285435063 3.469413389385951 26.706490296584608 3.278448343881242 C 26.515157307734153 3.0874832983765335 26.25466768994374 2.982106371676088 25.984375 2.9863281 z" stroke-linecap="round" fill="rgb(255, 221, 1)"/>
                        </g>
                    </svg>
                    <svg class="squiggly-3" width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' opacity='0'/>
                        <g transform="matrix(0.83 0 0 0.83 12 12)" >
                            <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill-rule: nonzero; opacity: 1;" transform=" translate(-15, -15)" d="M 25.984375 2.9863281 C 25.43285884300673 2.99494917319965 24.9924473355562 3.4484681771760246 25 3.999999999999999 L 25 4.6679688 C 25 5.7846347 24.116666 6.6679688 23 6.6679688 L 21.666016 6.6679688 C 19.468682 6.6679688 17.666016 8.4706345 17.666016 10.667969 L 17.666016 12 C 17.666016 13.116666 16.782682 14 15.666016 14 L 14.332031 14 C 12.134697 14 10.332031 15.802666 10.332031 18 L 10.332031 19.332031 C 10.332031 20.448697 9.4486973 21.332031 8.3320312 21.332031 L 7 21.332031 C 4.8026661 21.332031 3 23.134697 3 25.332031 L 3 26 C 2.994899710454515 26.360635916577568 3.184375296169332 26.696081364571608 3.495872849714331 26.877887721486516 C 3.8073704032593296 27.059694078401428 4.192629596740671 27.059694078401428 4.50412715028567 26.877887721486516 C 4.815624703830668 26.696081364571608 5.005100289545485 26.360635916577568 5 26 L 5 25.332031 C 5 24.215365 5.8833339 23.332031 7 23.332031 L 8.3320312 23.332031 C 10.529365 23.332031 12.332031 21.529365 12.332031 19.332031 L 12.332031 18 C 12.332031 16.883334 13.215365 16 14.332031 16 L 15.666016 16 C 17.86335 16 19.666016 14.197334 19.666016 12 L 19.666016 10.667969 C 19.666016 9.5513024 20.54935 8.6679688 21.666016 8.6679688 L 23 8.6679688 C 25.197334 8.6679688 27 6.8653027 27 4.6679688 L 27 4 C 27.003701433733635 3.729699684396449 26.897823285435063 3.469413389385951 26.706490296584608 3.278448343881242 C 26.515157307734153 3.0874832983765335 26.25466768994374 2.982106371676088 25.984375 2.9863281 z" stroke-linecap="round" fill="red"/>
                        </g>
                    </svg>
                    `;
                }, 3000);
            }else {
                logError.style.cursor = 'pointer';
                logError.innerHTML = 'Please type a valid Email, Password & Name!<br>Hint: Password should be at least 8 characters long.';
                logError.style.lineHeight = '30px';
                logError.style.display = 'block';
                setTimeout(() => {
                    logError.style.top = '510px';
                }, 1);
                logError.addEventListener('click', () => {
                    logError.style.top = '330px';
                    logError.style.display = 'none';
                });
            }
        });
    }, 300);
});

purpleSignInBtn.addEventListener('click', () => {
    purpleSignUpContainer.style.marginLeft = '32rem';
    purpleAuth.classList.remove('purple-auth-active');
    whiteAuth.classList.remove('white-auth-active');
    logError.style.display = 'none';
    
    setTimeout(() => {
        whiteSign.textContent = 'Sign In';
        alternativeSign.textContent = 'or use your email password';
        document.querySelector('.name-input').remove();
        inputsContainer.style.flexDirection = 'column';
        forgotPassword.style.display = 'block';
        document.querySelector('.white-sign-btn-new').remove();
        whiteSignBtn.style.display = 'block';
    }, 300);
});


whiteSignBtn.addEventListener('click', () => {
    if (emailRegex.test(emailInput.value) && passwordRegex.test(passwordInput.value)) {
        logError.textContent = 'Sorry you are not a Member!';
        logError.style.display = 'block';
        setTimeout(() => {
            logError.style.top = '390px';
        }, 1);
        setTimeout(() => {
            logError.style.top = '330px';
            logError.style.display = 'none';
        }, 2000);
    }else {
        logError.style.cursor = 'pointer';
        logError.innerHTML = 'Please type a valid Email & Password!<br>Hint: Password should be at least 8 characters long.';
        logError.style.lineHeight = '30px';
        logError.style.display = 'block';
        setTimeout(() => {
            logError.style.top = '370px';
        }, 1);
        logError.addEventListener('click', () => {
            logError.style.top = '330px';
            logError.style.display = 'none';
        });
    }
});