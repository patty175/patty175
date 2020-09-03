var loginButton = document.getElementById("ejecutor");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    

    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;

    if (email === "patty175@gmail.com" && password === "123456") {

        window.location.href = "mainpage.html";
        alert("Has iniciado sesión correctamente.");

    } else {
        alert("Por favor ingrese un email y contraseña válidos.");
    }

})