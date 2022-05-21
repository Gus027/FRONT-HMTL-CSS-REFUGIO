function validarSenha(){
    senha = document.formulario.senha.value
    confirma_senha = document.formulario.confirma_senha.value
    if (senha == confirma_senha){
        return true
    }
    else{ 
        alert("SENHAS DIFERENTES")
        return false
    }
}