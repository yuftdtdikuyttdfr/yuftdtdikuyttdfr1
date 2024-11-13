// Carregar dados do usuário do localStorage e exibir na página de perfil
document.addEventListener('DOMContentLoaded', () => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario) {
        document.getElementById('userName').textContent = usuario.nome;
        document.getElementById('userEmail').textContent = usuario.email;
        document.getElementById('userPhone').textContent = usuario.telefone;
        document.getElementById('userCPF').textContent = usuario.cpf;
        document.getElementById('userPassword').textContent = usuario.senha;
    }
});
