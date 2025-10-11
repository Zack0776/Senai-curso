// Função para formatar o CPF automaticamente enquanto o usuário digita
function formatarCPF(cpfInput) {
    let cpf = cpfInput.value.replace(/\D/g, ''); // Remove tudo que não for número

    if (cpf.length <= 3) {
        cpf = cpf.replace(/(\d{1,3})/, '$1');
    } else if (cpf.length <= 6) {
        cpf = cpf.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    } else if (cpf.length <= 9) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    }

    cpfInput.value = cpf; // Atualiza o campo com a formatação
    validarCPF(); // Revalida o CPF sempre que ele for formatado
}

// Função para validar o e-mail
function validarEmail() {
    const emailInput = document.getElementById('email');
    const mensagemErroEmail = document.getElementById('mensagemErroEmail');
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@(gmail\.com|hotmail\.com|outlook\.com)$/;

    if (email === "") {
        mensagemErroEmail.textContent = "Preencha o campo obrigatório.";
    } else if (!emailRegex.test(email)) {
        mensagemErroEmail.textContent = "O e-mail precisa ser do tipo: gmail.com, hotmail.com ou outlook.com.";
    } else {
        mensagemErroEmail.textContent = "";
    }

    habilitarBotao();  // Verifica se todos os campos estão corretos
}

// Função para validar a senha
function validarSenha() {
    const senhaInput = document.getElementById('senha');
    const mensagemErroSenha = document.getElementById('mensagemErroSenha');
    const senha = senhaInput.value.trim();
    const senhaRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

    if (senha === "") {
        mensagemErroSenha.textContent = "Preencha o campo obrigatório.";
    } else if (!senhaRegex.test(senha)) {
        mensagemErroSenha.textContent = "A senha deve ter pelo menos 6 caracteres, 1 número e 1 letra maiúscula.";
    } else {
        mensagemErroSenha.textContent = "";
    }

    validarConfirmarSenha(); // Verifica se as senhas coincidem
    habilitarBotao();  // Verifica se todos os campos estão corretos
}

// Função para validar a confirmação da senha
function validarConfirmarSenha() {
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmarSenha');
    const mensagemErroConfirmarSenha = document.getElementById('mensagemErroConfirmarSenha');
    const senha = senhaInput.value.trim();
    const confirmarSenha = confirmarSenhaInput.value.trim();

    if (confirmarSenha === "") {
        mensagemErroConfirmarSenha.textContent = "Por favor, confirme sua senha.";
    } else if (senha !== confirmarSenha) {
        mensagemErroConfirmarSenha.textContent = "As senhas não são compatíveis.";
    } else {
        mensagemErroConfirmarSenha.textContent = "";
    }

    habilitarBotao();  // Verifica se todos os campos estão corretos
}

// Função para validar o CPF
function validarCPF() {
    const cpfInput = document.getElementById('cpf');
    const mensagemErroCPF = document.getElementById('mensagemErroCPF');
    let cpf = cpfInput.value.trim();

    // Remove todos os caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    if (cpf === "") {
        mensagemErroCPF.textContent = "Preencha o campo obrigatório.";
    } else if (cpf.length !== 11) {
        mensagemErroCPF.textContent = "O CPF deve ter 11 dígitos.";
    } else {
        // Verifica se o CPF contém apenas números repetidos, como 11111111111
        if (/^(\d)\1{10}$/.test(cpf)) {
            mensagemErroCPF.textContent = "CPF inválido. CPF com números repetidos não é aceito.";
        } else {
            // Validação do CPF usando o algoritmo de verificação dos dois últimos dígitos
            if (!validarDigitosCPF(cpf)) {
                mensagemErroCPF.textContent = "CPF inválido. Verifique os dígitos.";
            } else {
                mensagemErroCPF.textContent = ""; // Limpa a mensagem de erro se o CPF for válido
            }
        }
    }

    habilitarBotao();  // Verifica se todos os campos estão corretos
}

// Função para validar os dois dígitos verificadores do CPF
function validarDigitosCPF(cpf) {
    let soma = 0;
    let resto;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    resto = soma % 11;
    if (resto < 2) resto = 0;
    else resto = 11 - resto;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    if (resto < 2) resto = 0;
    else resto = 11 - resto;
    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true;
}

// Função para habilitar ou desabilitar o botão
function habilitarBotao() {
    const emailValido = document.getElementById('email').value.trim() !== "" && /^[^\s@]+@(gmail\.com|hotmail\.com|outlook\.com)$/.test(document.getElementById('email').value.trim());
    const senhaValida = document.getElementById('senha').value.trim() !== "" && /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/.test(document.getElementById('senha').value.trim());
    const cpfValido = document.getElementById('cpf').value.trim() !== "" && /^\d{11}$/.test(document.getElementById('cpf').value.trim());  // Verifica CPF sem máscara
    const senhasCoincidem = document.getElementById('senha').value.trim() === document.getElementById('confirmarSenha').value.trim();

    const btnEnviar = document.getElementById('btnEnviar');
    if (emailValido && senhaValida && cpfValido && senhasCoincidem) {
        btnEnviar.disabled = false; // Habilita o botão
    } else {
        btnEnviar.disabled = true; // Desabilita o botão
    }
}

// Função para redirecionar para a página de sucesso após concluir o cadastro
function concluirCadastro(event) {
    event.preventDefault();  // Impede que o formulário seja enviado

    // Redireciona para a página de cadastro concluído
    window.location.href = "cadastro_concluido.html";  // Verifique se o caminho está correto
}

// Chama habilitarBotao ao carregar a página
window.onload = function() {
    habilitarBotao(); // Verifica se os campos estão corretamente preenchidos ao carregar a página
}
