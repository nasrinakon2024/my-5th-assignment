const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

//form submit handler

loginForm.addEventListener('submit', function(e){
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const defaultUser = 'admin';
    const defaultPass = 'admin123';

    if (username === defaultUser && password === defaultPass){
        alert("Login Successfull! Redirecting...");
    }
    else{
        alert("Invalid Username or Password. Please use the demo credentials.");
        passwordInput.value = "";
    }
});

usernameInput.addEventListener('focus', () =>{
    usernameInput.classList.add('border-indigo-500');
})