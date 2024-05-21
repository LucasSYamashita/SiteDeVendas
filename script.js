document.addEventListener('DOMContentLoaded', function() {
    // Lógica para os botões de reservar na página principal
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

    // Lógica para o formulário de login na página de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simulação de autenticação (para fins de exemplo)
            if (username === 'usuario' && password === 'senha') {
                Swal.fire({
                    title: 'Login Bem-Sucedido!',
                    text: 'Bem-vindo ' + username,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then(() => {
                    window.location.href = 'index.html'; // Redireciona para a página principal após o login bem-sucedido
                });
            } else {
                Swal.fire({
                    title: 'Erro de Login!',
                    text: 'Nome de usuário ou senha incorretos.',
                    icon: 'error',
                    confirmButtonText: 'Tentar Novamente'
                });
            }
        });
    }

});
