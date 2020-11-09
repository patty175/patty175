
  
var loginButton = document.getElementById("ejecutor");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
// Almacena el value de email y password y redirige a mainpage.html


    var email = document.getElementById('inputEmail');
    var password = document.getElementById('inputPassword');

    if(email.value.length == 0){
        alert('Por favor ingresa un email');

    }else if(password.value.length == 0){
        alert('Por favor ingresa una contraseña');

    }else if(email.value.length == 0 && password.value.length == 0){
        alert('Por favor ingresá un email y una contraseña');

    }else{
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
       ;

        window.location.href = "mainpage.html";
        alert('Cuenta creada satisfactoriamente. Bienvenid@!');
    }
});