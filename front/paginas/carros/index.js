var modais = document.querySelector(".modais")
var list = document.querySelector("#cont2")
var uri = `http://localhost:3004/estacionamento/Veiculo`

function rec() {
    window.location.href = "../front/index.html"
}
function mostraModal() {
    modais.setAttribute("style", "display:flex;");
}

fetch("http://localhost:3004/estacionamento/Veiculo")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        data.forEach(todo => {
            let novoItem = document.querySelector(".vagas").cloneNode(true);

            novoItem.classList.remove(".model");

            novoItem.querySelector("#id-cli").append(todo.id_cliente);
            novoItem.querySelector("#placa").append(todo.placa_veiculo);
            novoItem.querySelector("#cor").append(todo.cor);
            novoItem.querySelector("#modelo").append(todo.modelo);
            novoItem.querySelector("#tipo").append(todo.tipo_veiculo);

            list.appendChild(novoItem);
        });
    });

    function cadastrar() {
        let data = {};

        let body = {
            "id_cliente": document.getElementById("id-cli-cad").value,
            "placa_veiculo": document.getElementById("plac-v").value,
            "cor": document.getElementById("cor-v").value,
            "modelo": document.getElementById("mo-v").value,
            "tipo_veiculo": document.getElementById("cc").value
        }
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        options.body = JSON.stringify(body);
        if (body.id_cliente.length > 0 && body.placa_veiculo.length > 0 && body.cor.length > 0 && body.modelo.length > 0 && body.tipo_veiculo.length > 0) {
            fetch(uri, options)
                .then(resp => resp.status)
                .then(data => {
                    if (data == 201) {
                        alert("Veiculo cadastrado com sucesso");
                        window.location.reload();
                    } else {
                        alert("Erro ao enviar dados ou o Cliente não existe.");
                        // window.location.reload();
                    }
                })
                .catch(err => alert("Erro ao enviar dados. Erro:" + err));
        }else{
            alert("Preencha todos os campos obrigatórios");
        }
    }

    function remover(placa_veiculo, item) {
        fetch("http://localhost:3004/estacionamento/Veiculo/placa_veiculo/" + placa_veiculo, {
            "method":"DELETE"
        })
        .then(resp => { return resp.json()})
        .then(data => {
            console.log(item)
            item.remove();
        });
    }