// Função para validar o login
function validarLogin(event) {
    event.preventDefault();  // Impede o envio do formulário

    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const mensagemErroLogin = document.getElementById('mensagemErroLogin');

    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    // Recupera os dados do localStorage
    const emailCadastrado = localStorage.getItem('email');
    const senhaCadastrada = localStorage.getItem('senha');

    // Verifica se o e-mail existe no localStorage
    if (email === emailCadastrado) {
        // Se o e-mail for encontrado, verifica a senha
        if (senha === senhaCadastrada) {
            // Se a senha estiver correta, redireciona para a outra página (site ou página principal)
            window.location.href = "about.html";  // Substitua por sua página de destino
        } else {
            // Se a senha estiver incorreta, exibe mensagem de erro
            mensagemErroLogin.textContent = "Senha incorreta. Tente novamente.";
        }
    } else {
        // Se o e-mail não for encontrado, exibe mensagem de erro
        mensagemErroLogin.textContent = "E-mail ou senha incorretos. Tente novamente.";
    }
}

// Adiciona o evento de submit ao formulário de login
document.getElementById('loginForm').addEventListener('submit', validarLogin);
