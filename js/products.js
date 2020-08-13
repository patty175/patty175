//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var productsArray = [];


function showProductsList(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let category = array[i];

        htmlContentToAppend += '<div class="list-group-item list-group-item-action">\
        <div class="row"  onclick="showSpinner()">\
            <div class="col-3">\
                <img src="' + category.imgSrc + '" alt="' + category.description + '" class="img-thumbnail">\
            </div>\
            <div class="col">\
                <div class="d-flex w-100 justify-content-between">\
                    <h4 class="mb-1">'+ category.name +'</h4>\
                    <small class="text-muted">' + category.soldCount + ' artículos</small>\
                </div>\
            </div>\
        </div>\
    </div>';

    document.getElementById("products-list").innerHTML = htmlContentToAppend;
        }
    }


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

  document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        console.log(resultObj);
        if (resultObj.status === "ok")
        { console.log('ITS WORKING!');
            productsArray = resultObj.data;
            //Muestro las categorías ordenadas
            showProductsList(productsArray);
    }
});

    });