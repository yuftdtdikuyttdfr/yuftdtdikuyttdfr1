// Função para abrir o modal
function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Função para salvar dados no localStorage e redirecionar para perfil
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;

    // Salvar dados no localStorage
    const usuario = {
        nome: nome,
        email: email,
        telefone: telefone,
        cpf: cpf,
        senha: senha
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));

    alert('Seu cadastro foi realizado!');
    closeModal();
    document.getElementById('cadastroForm').reset();

    // Redirecionar para a página de perfil
    window.location.href = "perfil.html";
});
