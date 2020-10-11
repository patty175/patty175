let total = 0;
let subtotal = 0;
let productCcy = "";
let shipping = 0.15;




//Funcion que toma la informacion del Json y la muestra en form de lista 
getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            cartArticles = resultObj.data;
            cartInfo = cartArticles.articles;

            let htmlContentToAppend = "";
            for(let i = 0; i < cartInfo.length; i++){
         
             
          htmlContentToAppend += `
          <tr>
          <td><img src=" ` + cartInfo[i].src + `" width="80px"</td>
          <td> ` + cartInfo[i].name + ` </td>
          <td> ` + cartInfo[i].currency + ` <span id="productCost" value= ` + cartInfo[i].unitCost + `></span></td>
          <td><input id="productCount" class="form-control" style="width:60px" value= ` + cartInfo[i].count + `></td>
          <td><input id="productSubtotal" class="form-control" style="width:60px" >` + cartInfo[i].currency + `</td>
          </tr>
          `      
                   
            document.getElementById("cartItem").innerHTML = htmlContentToAppend;
    
        };
    };
});


function updateTotal(){

 

  let subTotalHTML = document.getElementById("subTotal");
  let totalHTML = document.getElementById("totalAmount");
  let shippingHTML = document.getElementById("shippingInfo");

  let shippingCost = Math.round(shipping * subtotal);

  subTotalHTML.innerHTML = productCcy + " " + subtotal;
  totalHTML.innerHTML = productCcy + " " + (subtotal + shippingCost);
  shippingHTML.innerHTML = productCcy + " " + shippingCost

  alert("working")
  }
   

function updateSubtotal(){ 

  let count = parseInt(document.getElementById("productCount").value);
  let productunitCost = parseInt(document.getElementById("productCost").value);
  subtotal = count * productunitCost
  document.getElementById("subTotal").innerHTML = productCcy + " " + subtotal;
 
  updateTotal();
 
}


//Funcion que aplica el cargo de envio dependiendo de que opcion se elija
document.addEventListener("DOMContentLoaded", function(e){

  document.getElementById("premiumOption").addEventListener("change", function(){
    shipping = 0.15;
    updateTotal();
  });
  document.getElementById("expressOption").addEventListener("change", function(){
    shipping = 0.07;
    updateTotal();
  });
  document.getElementById("standardOption").addEventListener("change", function(){
    shipping = 0.05;
    updateTotal();
  });
  


});

