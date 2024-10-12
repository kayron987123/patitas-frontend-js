let msgSuccess;

window.addEventListener('load', function(){
    //referenciar elemntos de la pagina
    msgSuccess = document.getElementById('msgSuccess');

    //recuperar nombre del usuario
    const result = JSON.parse(this.localStorage.getItem('result'));
    console.log('Resultado del servidor : ', result);
    mostrarAlerta(result.nombreUsuario);
});

function mostrarAlerta(mensaje){
    msgSuccess.innerHTML = mensaje;
    msgSuccess.style.display = 'block';
}

function ocultarAlerta(){
    msgSuccess.innerHTML = '';
    msgSuccess.style.display = 'none';
}