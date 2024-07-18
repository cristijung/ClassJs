// alterações feitas
//ajustado o reset do form: a função reset está sendo chamada no form após a renderização dos usuários, 
//desta forma se garante que o formulário está limpo para novas entradas.
//ajustado o add de ouvintes do evento de forma mais adequada: se remove os ouvintes antigos antes de adicionar novos para evitar múltiplas submissões.
//está ok agora


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
    document.getElementById("formUsuario").reset();
}

function editarUsuario(id) {
    const usuarioIndex = usuarios.findIndex(u => u.id === id);
    if (usuarioIndex > -1) {
        const usuario = usuarios[usuarioIndex];
        document.getElementById("nome").value = usuario.nome;
        document.getElementById("email").value = usuario.email;

        document.getElementById("formUsuario").removeEventListener("submit", adicionarUsuario);

        const atualizarUsuario = function(event) {
            event.preventDefault();
            usuarios[usuarioIndex].nome = document.getElementById("nome").value;
            usuarios[usuarioIndex].email = document.getElementById("email").value;
            renderizarUsuarios();
            document.getElementById("formUsuario").reset();
            document.getElementById("formUsuario").removeEventListener("submit", atualizarUsuario);
            document.getElementById("formUsuario").addEventListener("submit", adicionarUsuario);
        };

        document.getElementById("formUsuario").addEventListener("submit", atualizarUsuario);
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
