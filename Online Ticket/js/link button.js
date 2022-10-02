const signin = document.getElementById('signin');
const signup = document.getElementById('signup');


document.getElementById('signup_link').addEventListener('click', () => {
    signin.style = "visibility: hidden;"
    signup.style = "visibility: visible;"
});

document.getElementById('signin_link').addEventListener('click', () => {
    signup.style = "visibility: hidden;"
    signin.style = "visibility: visible;"
});