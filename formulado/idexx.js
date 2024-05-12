const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const mensagem=document.getElementById("mensagem")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

email.addEventListener("blur", () => {
  checkInputEmail();
})


username.addEventListener("blur", () => {
  checkInputUsername();
})


function checkInputUsername(){
  const usernameValue = username.value;

  if(usernameValue === ""){
    errorInput(username, "Preencha um username!")
  }else{
    const formItem = username.parentElement;
    formItem.className = "form-content"
  }

}

function checkInputEmail(){
  const emailValue = email.value;

  if(emailValue === ""){
    errorInput(email, "O email é obrigatório.")
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-content"
  }


}
function checkInputMensagem(){
    const mensagemValue=mensagem.value
    if(mensagemValue===""){
        errorInput(mensagem, "Coloca o seu motivo")

    } else{
    const formItem = mensagem.parentElement;
    formItem.className = "form-content"
  }
}







function checkForm(){
  checkInputUsername();
  checkInputEmail();
  checkInputMensagem();
 

  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  if(isValid){
    alert("CADASTRADO COM SUCESSO!")
  }

}


function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}