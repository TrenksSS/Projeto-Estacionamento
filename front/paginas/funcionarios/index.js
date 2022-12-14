var modais = document.querySelector(".modais")
var list = document.querySelector("#cont2")
var uri = `http://localhost:3004/estacionamento/Funcionarios`

function rec() {
    window.location.href = "../front/index.html"
}
function mostraModal() {
    modais.setAttribute("style", "display:flex;");
}

fetch("http://localhost:3004/estacionamento/Funcionarios")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        data.forEach(todo => {
            let novoItem = document.querySelector(".vagas").cloneNode(true);

            novoItem.classList.remove(".model");

            novoItem.querySelector("#cpf-fun").append(todo.cpf);
            novoItem.querySelector("#nome-fun").append(todo.nome_func);
            novoItem.querySelector("#senha-fun").append(todo.senha);
            novoItem.querySelector('img').addEventListener('click', () => remover(todo.cpf.toString(), novoItem))

            list.appendChild(novoItem);
        });
    });

    function cadastrar() {
        let data = {};

        let body = {
            "cpf": document.getElementById("cpf-cad").value,
            "nome": document.getElementById("nome-cad").value,
            "senha": document.getElementById("senha-cad").value
        }
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };
        if (body.cpf.length > 0 && body.nome.length > 0 && body.senha.length > 0) {
            fetch(uri, options)
                .then(resp => resp.status)
                .then(data => {
                    if (data == 201) {
                        alert("Funcionario cadastrado com sucesso");
                        window.location.reload();
                    } else {
                        alert("Erro ao enviar dados.");
                        // window.location.reload();
                    }
                })
                .catch(err => alert("Erro ao enviar dados. Erro:" + err));
        }else{
            alert("Preencha todos os campos obrigat??rios");
        }
    }

    function remover(cpf, item) {
        fetch("http://localhost:3004/estacionamento/Funcionarios/cpf/" + cpf, {
            "method":"DELETE"
        })
        .then(resp => { return resp})
        .then(data => {
            console.log(item)
            item.remove();
        });
    }