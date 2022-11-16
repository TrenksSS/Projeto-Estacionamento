var email = document.querySelector("#cpf")
var senha = document.querySelector("#psw")


function login(){
     let encontrar = false

     fetch("http://localhost:3004/estacionamento/Funcionarios")
     .then(res => {return res.json() })
     .then(usuarios => {
          usuarios.forEach(usuario => {
               if((email.value == usuario.cpf) && (senha.value == usuario.senha)){
                    encontrar = true
     
                    window.location.href= "../front/index.html"
               }
          });
          if(encontrar == false) alert("CPF ou Senha Invalidos")
          
     })
}

function mostraModal(){
          modais.setAttribute("style","display:flex;");
}