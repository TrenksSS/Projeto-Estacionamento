var modais = document.querySelector(".modais")
var list = document.querySelector("#cont2")
var uri = `http://localhost:3004/estacionamento/Vagas`

function rec() {
    window.location.href = "../front/index.html"
}
function mostraModal() {
    modais.setAttribute("style", "display:flex;");
}

fetch("http://localhost:3004/estacionamento/Vagas")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        data.forEach(todo => {
            let novoItem = document.querySelector(".vagas").cloneNode(true);

            novoItem.classList.remove(".model");

            novoItem.querySelector("#title").append(todo.id_vaga);
            novoItem.querySelector("#tip").append(todo.tipo);
            novoItem.querySelector("#cb").checked = todo.stat;

            novoItem.querySelector("#cb").addEventListener("change",()=>{
                if(this.checked){
                    vagas.setAttribute("style", "background-color:red;");
                } 
            })

            list.appendChild(novoItem);
           
        });
    });

    function cadastrar() {
        let data = {};

        let body = {
            "id": document.getElementById("vagid").value,
            "tipo": document.getElementById("op").value,
            "chec": document.getElementById("x").value
        }
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        options.body = JSON.stringify(body);
        if (body.id.length > 0 && body.tipo.length > 0 && body.chec.length > 0) {
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