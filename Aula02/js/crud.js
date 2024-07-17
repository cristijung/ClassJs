const usuarios = [
    { id: 1, nome: "Ana Banana", email: "banana@example.com" },
    { id: 2, nome: "Pafúncio Souza", email: "souza@example.com" }
];

function renderizarUsuarios() {
    const usuariosDiv = document.getElementById("usuarios");
    usuariosDiv.innerHTML = "";

    usuarios.forEach(usuario => {
        const usuarioDiv = document.createElement("div");
        usuarioDiv.classList.add("usuario");
        usuarioDiv.id = `usuario-${usuario.id}`;
        usuarioDiv.innerHTML = `
            <h2>${usuario.nome}</h2>
            <p>Email: ${usuario.email}</p>
            <button class="botao-editar btn btn-warning" onclick="editarUsuario(${usuario.id})">Editar</button>
            <button class="botao-deletar btn btn-danger" onclick="deletarUsuario(${usuario.id})">Deletar</button>
        `;
        usuariosDiv.appendChild(usuarioDiv);
    });
}

document.getElementById("formUsuario").addEventListener("submit", adicionarUsuario);

function adicionarUsuario(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const id = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;

    usuarios.push({ id, nome, email });
    renderizarUsuarios();
    this.reset();
}

function editarUsuario(id) {
    const usuario = usuarios.find(u => u.id === id);
    if (usuario) {
        document.getElementById("nome").value = usuario.nome;
        document.getElementById("email").value = usuario.email;
        document.getElementById("formUsuario").onsubmit = function(event) {
            event.preventDefault();
            usuario.nome = document.getElementById("nome").value;
            usuario.email = document.getElementById("email").value;
            renderizarUsuarios();
            this.reset();
            document.getElementById("formUsuario").onsubmit = adicionarUsuario;
        };
    }
}

function deletarUsuario(id) {
    const index = usuarios.findIndex(u => u.id === id);
    if (index > -1) {
        usuarios.splice(index, 1);
        renderizarUsuarios();
    }
}

renderizarUsuarios();