const logo = document.getElementById('logo');
const loginForm = document.getElementById('loginForm');

logo.addEventListener('click', () => {
    if (loginForm.classList.contains('hidden')) {
        loginForm.classList.remove('hidden');
        loginForm.classList.add('active');
    } else {
        loginForm.classList.remove('active');
        loginForm.classList.add('hidden');
    }
});