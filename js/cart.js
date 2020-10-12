

let shipping = 0;
var shippingCost = 0;


//Funcion que toma la informacion del Json y la muestra en form de lista 

function showCart(){

            let htmlContentToAppend = "";
            for(let i = 0; i < cartInfo.length; i++){

         var subtotal = cartInfo[i].unitCost
         document.getElementById("subTotal").innerHTML = subtotal + ` ` + cartInfo[i].currency ;
         document.getElementById("shippingInfo").innerHTML = shippingCost + ` ` + cartInfo[i].currency ;
         document.getElementById("totalAmount").innerHTML = (subtotal+shippingCost) + ` ` + cartInfo[i].currency ;
                
                       
             
          htmlContentToAppend += `
          <tr>
          <td><img src=" ` + cartInfo[i].src + `" width="80px"</td>
          <td> ` + cartInfo[i].name + ` </td>
          <td> <span id="productCurrency"` + cartInfo[i].currency + `</span> <span id="productCost">` + cartInfo[i].unitCost + `</span></td>
          <td><input id="productCount" class="form-control" style="width:60px" value= ` + cartInfo[i].count + `></td>
          <td><input id="productSubtotal" class="form-control" style="width:60px" value="`+ (cartInfo[i].count  * cartInfo[i].unitCost)+  `">` + cartInfo[i].currency + `</td>
          </tr>
          `      
                    
            document.getElementById("cartItem").innerHTML = htmlContentToAppend;
            
            document.getElementById("productCount").addEventListener("change", function(){
              let quantity = document.getElementById("productCount").value;
              subtotal = quantity * cartInfo[i].unitCost;
              document.getElementById("productSubtotal").innerHTML = subtotal + ` ` + cartInfo[i].currency;
              document.getElementById("subTotal").innerHTML = subtotal + ` ` + cartInfo[i].currency;
              
              updateTotal();
              updateShipping();
           
        });
    
       
          document.getElementById("premiumOption").addEventListener("change", function(){
            shipping = 0.15;
            updateTotal();
            updateShipping()
          });
          document.getElementById("expressOption").addEventListener("change", function(){
            shipping = 0.07;
            updateTotal();
            updateShipping()
          });
          document.getElementById("standardOption").addEventListener("change", function(){
            shipping = 0.05;
            updateTotal();
            updateShipping()
          });


function updateTotal(){ 

  document.getElementById("totalAmount").innerHTML = subtotal + shippingCost + ` ` + cartInfo[i].currency;
 
}

function updateShipping() {
  shippingCost = subtotal * shipping;
  document.getElementById("shippingInfo").innerHTML = parseInt(shippingCost) + ` ` + cartInfo[i].currency;
}

  }
}

  document.addEventListener("DOMContentLoaded", function(e){
   getJSONData(CART_INFO_URL).then(function(resultObj){
    if (resultObj.status == "ok")
      {   
        cartArticles = resultObj.data;
            cartInfo = cartArticles.articles;
                
                showCart();

      };
    });
  });
