const btnSignIn = document.getElementById('sign-in');
const btnSignUp = document.getElementById('sign-up');
const formRegister = document.querySelector('.register');
const formLogin = document.querySelector('.login');

btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hidden");
    formLogin.classList.remove('hidden')
})

btnSignUp.addEventListener("click", e => {
    formLogin.classList.add("hidden");
    formRegister.classList.remove('hidden')
})