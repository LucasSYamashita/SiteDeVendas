document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('registerUsername').value;
            const password = document.getElementById('registerPassword').value;

            localStorage.setItem('registeredUsername', username);
            localStorage.setItem('registeredPassword', password);

            Swal.fire({
                title: 'Cadastro bem-sucedido!',
                text: 'Agora você pode fazer login.',
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(() => {
                window.location.href = 'login.html';
            });
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;

            const registeredUsername = localStorage.getItem('registeredUsername');
            const registeredPassword = localStorage.getItem('registeredPassword');

            if (username === registeredUsername && password === registeredPassword) {
                Swal.fire({
                    title: 'Login bem-sucedido!',
                    text: 'Bem-vindo de volta!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then(() => {
                    window.location.href = 'index.html';
                });
            } else {
                Swal.fire({
                    title: 'Erro de login',
                    text: 'Usuário ou senha incorretos.',
                    icon: 'error',
                    confirmButtonText: 'Tentar novamente'
                });
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {

    const reservarBtns = document.querySelectorAll('.reservar-btn');
    
    reservarBtns.forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            Swal.fire({
                title: 'Reserva Confirmada!',
                text: 'Sua reserva foi efetuada com sucesso.',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
        });
     });
    });