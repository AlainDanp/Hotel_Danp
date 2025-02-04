window.onload = () => {
    const container = document.querySelector('.container');
    const loginLink = document.querySelector('.SignInLink');
    const registerLink = document.querySelector('.SignUpLink');

    if (registerLink && loginLink && container) {
        registerLink.addEventListener('click', () => {
            container.classList.add('active');
        });

        loginLink.addEventListener('click', () => {
            container.classList.remove('active');
        });
    }
}
