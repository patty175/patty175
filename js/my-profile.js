
document.addEventListener("DOMContentLoaded", function (e) {

    //Muestra el nombre de usuario en el campo correo electrónico de perfil
    document.getElementById("email_address").value = localStorage.getItem('email');
   
    
    var user = document.getElementById("p1").innerHTML
    var name1 = document.getElementById("first_name").value;
    var name2 = document.getElementById("second_name").value;
    var surname1 = document.getElementById("first_surname").value;
    var surname2 = document.getElementById("second_surname").value;
    var mobile = document.getElementById("mobile_number").value;
    

   //Muestro los nombres en el campo nombre del perfil
   document.getElementById("first_name").value = localStorage.getItem('first_name');

   //muestro los apellidos en el campo apellido del perfil
   document.getElementById("second_name").value = localStorage.getItem('second_name');

   //muestro la fecha de nacimiento en el campo fecha de nacimiento
   document.getElementById("first_surname").value = localStorage.getItem('first_surname');

   //muestro el número de teléfono en el campo número de teléfono
   document.getElementById("second_surname").value = localStorage.getItem('second_surname');

     //muestro el número de teléfono en el campo número de teléfono
     document.getElementById("mobile_number").value = localStorage.getItem('mobile_number');


     //esta función modifica los datos de perfil
   document.getElementById("saveChanges").addEventListener("submit", myFunction);
     function myFunction() {

   }

   (function() {
     'use strict';
     window.addEventListener('load', function() {
       // Fetch all the forms we want to apply custom Bootstrap validation styles to
       var forms = document.getElementsByClassName('needs-validation');
       // Loop over them and prevent submission
       var validation = Array.prototype.filter.call(forms, function(form) {
         form.addEventListener("submit", function(event) {
             //cambiar los datos del localstorage si se modifican los datos
           
             localStorage.setItem('first_name', first_name.value);
             localStorage.setItem('second_name', second_name.value);
             localStorage.setItem('first_surname', first_surname.value);
             localStorage.setItem('second_surname', second_surname.value);
             localStorage.setItem('mobile_number', mobile_number.value);
             //creo una alerta para indicar que se modificaron los datos
           if (form.checkValidity() === false) {
             event.preventDefault();
             event.stopPropagation();
           }
           
           form.classList.add('was-validated');
           alert("Se han guardado tus cambios!");
         }, false);
       });
     }, false);
   })();

});
