var product = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let soldCountHTML = document.getElementById("soldCount");
            let productPriceHTML = document.getElementById("productPrice");
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            soldCountHTML.innerHTML = product.soldCount;
            productPriceHTML.innerHTML = product.currency + " " +  product.cost;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
        }
    });

    //Agrego productos relacionados

    var chevrolet = "Chevrolet Onix Joy"; 
    var peugeot = "Peugeot 208"
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            currentProductsArray = resultObj.data;

            let htmlContentToAppend = "";
            for (let i = 0; i < currentProductsArray.length; i++) {
                if (currentProductsArray[i].name == chevrolet || currentProductsArray[i].name == peugeot) {
                    // no hace nada
                } else {
                    htmlContentToAppend += `
                    <div class="col-sm-4 col-md-2">\
                        <div class="card-img-top">\
                         <img src="` + currentProductsArray[i].imgSrc + `"class="img-thumbnail" name="zoom" style="cursor:pointer">\
                    </div>\
                    <h4>\
                         <a href="# " class="my-3">` + currentProductsArray[i].name + `</a>\
                    </h4>\ 
                 </div>`

                        document.getElementById("relatedProducts").innerHTML = htmlContentToAppend;
 
                }
            }
        }
    }
    
    )
});

    //Agrego lista de comentarios 

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj) {
       
        if (resultObj.status === "ok") {
            commentsArray = resultObj.data;
                  
           let htmlContentToAppend = "";
            let starsRate = "";
         for(let i = 0; i < commentsArray.length; i++){
             starsRate = ""; 
       
             starsRate = showStars(commentsArray[i].score, starsRate);
                    htmlContentToAppend +=`
                         <div style="padding-bottom: 22px;">
                           <h4><a href="#">` + commentsArray[i].user + `</a>
                         </h4>` + starsRate + ` 
                         <h5 class="equal">` + commentsArray[i].description + `</h5> 
                         <small>` + commentsArray[i].dateTime +`</small>
                         </div>`;
                       
             document.getElementById("commentsLoaded").innerHTML = htmlContentToAppend;
        }
    }
        
});

//Funcion que agrega las estrellas a los comentarios
function showStars(score, starsRate) {
    
   var max = 5;
   var unchecked = (max - score);
        for(var i=0; i<score; i++) {
         starsRate += `<small><i class="fa fa-star checked"></i></small>`;
        }
        for(var i=0; i< unchecked; i++){
            starsRate += `<small><i class="fa fa-star"></i></small>`;
        }
    return starsRate;
    }


    //Funcion que toma el comentario enviado, lo guarda en el localStorage
    //con una nueva variable e inserta el comentario en el area de comentarios
     
  document.getElementById("comment-submit").addEventListener("click", function(){

    var comentario = document.getElementById("commentBox").value;
    var rating = document.getElementById("inputRanking").value;

    var dateTime = new Date().toLocaleString();

    var user = localStorage.getItem("p1")

    var globalComment = localStorage.getItem("cadena");

    
    var comentario = comentario + "|" + rating + "|" + user + "|" + dateTime;

    if( GlobalComment ) GlobalComment += "*" + comentario;

    localStorage.setItem("cadena", globalComment)

    // para pintar esos valores, obtener la etiqueta html con la concatenacion de los valores


});  
    


}

   


