const form = document.getElementById('form');
const username = document.getElementById('username');
const password= document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === '' || usernameValue !== 'user123') {
        setErrorFor(username, 'Wrong username');
    } else {
        setSuccessFor(username);
    }

    if(passwordValue === '' || passwordValue !== '123') {
        setErrorFor(password, 'Wrong password');
    } else {
        setSuccessFor(password);
    }
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
    
}