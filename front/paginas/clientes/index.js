var modais = document.querySelector(".modais")
var list = document.querySelector("#cont2")
var uri = `http://localhost:3004/estacionamento/Funcionarios`

function rec() {
    window.location.href = "../front/index.html"
}
function mostraModal() {
    modais.setAttribute("style", "display:flex;");
}

fetch("http://localhost:3004/estacionamento/Cliente")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        data.forEach(todo => {
            let novoItem = document.querySelector(".vagas").cloneNode(true);

            novoItem.classList.remove(".model");

            novoItem.querySelector("#id-cli").append(todo.id_cliente);
            novoItem.querySelector("#nome-cli").append(todo.nome);
            novoItem.querySelector("#tel-cli").append(todo.telefone);

            list.appendChild(novoItem);
        });
    });

    function cadastrar() {
        let data = {};

        let body = {
            "id": document.getElementById("id-cli-cad").value,
            "nome": document.getElementById("nome-cli-cad").value,
            "tel": document.getElementById("tel-cli-cad").value
        }
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        options.body = JSON.stringify(body);
        if (body.id.length > 0 && body.nome.length > 0 && body.tel.length > 0) {
            fetch(uri, options)
                .then(resp => resp.status)
                .then(data => {
                    if (data == 201) {
                        alert("Cliente cadastrado com sucesso");
                        window.location.reload();
                    } else {
                        alert("Erro ao enviar dados.");
                        // window.location.reload();
                    }
                })
                .catch(err => alert("Erro ao enviar dados. Erro:" + err));
        }else{
            alert("Preencha todos os campos obrigatórios");
        }
    }

    function remover(id, item) {
        fetch("http://localhost:3004/estacionamento/Cliente/" + id, {
            "method":"DELETE"
        })
        .then(resp => { return resp.json()})
        .then(data => {
            item.remove();
        });
    }