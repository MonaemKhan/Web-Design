//user name

const username_input = document.getElementById('username');
const username_cir = document.getElementById('username-cir');
const username_exe = document.getElementById('username-exe');
const username_small = document.getElementById('username-small');

username_input.addEventListener("focusout", () => {
    const name = username_input.value.trim();
    console.log(name);
    if (name.match(/[(&)(#)(!)(@)(%)(^)(*)(,)(/)(\)(=)(+)(_)0-9]/)) {
        username_action("Special Charecter Is not allowed");
    } else if (name.match(/[0-9]/)) {
        username_action("Do not start with 0-9");
    } else if (name.charAt(0).match(/[(.)(-)]/)) {
        username_action("Do not start with . or -");
    } else if (name === '') {
        username_cir.style = "visibility: hidden;";
        username_input.style = "border-color: #f0f0f0;"
    } else {
        username_cir.style = "visibility: visible;";
        username_input.style = "border-color: #2ecc71;"
    }
});

function username_action(msg) {
    username_exe.style = "visibility: visible;"
    username_input.style = "border-color: #e74c3c;"
    username_small.innerHTML = msg;
    username_small.style = "visibility: visible;";

    username_input.addEventListener("focusin", () => {
        username_exe.style = "visibility: hidden;"
        username_input.style = "border-color: #f0f0f0;"
        username_small.style = "visibility: hidden;";
        username_input.value = "";
    });
}

//password

const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

const password_cir = document.getElementById('password-cir');
const password1_cir = document.getElementById('password1-cir');

const password_exe = document.getElementById('password-exe');

const password_small = document.getElementById('password-small');
const password1_small = document.getElementById('password1-small');

password2.addEventListener("keyup", () => {
    if (password2.value === password1.value) {
        password_cir.style = "visibility: visible;";
        password1_cir.style = "visibility: visible;";

        password1.style = "border-color: #2ecc71;"
        password2.style = "border-color: #2ecc71;"

        password_exe.style = "visibility: hidden;"

        password_small.style = "visibility: visible; color: #2ecc71;";
        password1_small.style = "visibility: visible; color: #2ecc71;";

        password_small.innerHTML = "Pasword Matched";      
        password1_small.innerHTML = "Pasword Matched";      
    } else {
        password_action("Password Do Not Match")
    }
});

function password_action(msg) {
    password_exe.style = "visibility: visible;"
    password2.style = "border-color: red;"
    password_small.innerHTML = msg;
    password_small.style = "visibility: visible;";

    password2.addEventListener("focusin", () => {
        password_exe.style = "visibility: hidden;"
        password.style = "border-color: #f0f0f0;"
        password_small.style = "visibility: hidden;";
        password.value = "";
    });
}