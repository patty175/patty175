
let subtotal = 0;
// Por defecto Premium esta chequeado
let shipping = 0.15;
let shippingCost = 0;


//Funcion que toma la informacion del Json y la muestra en form de lista 
function showCart(){

	let htmlContentToAppend = ""; 
	
    for(let i = 0; i < cartInfo.length; i++) {
		   
        htmlContentToAppend += `<tr>
		<td><img src=" ` + cartInfo[i].src + `" width="80px"</td>
		<td> ` + cartInfo[i].name + ` </td>
		<td> <span id="productCurrency"` + cartInfo[i].currency + `</span> <span id="productCost">` + cartInfo[i].unitCost + `</span></td>
		<td><input id="productCount" data-cost="` + cartInfo[i].unitCost + `" data-index="`+i+`" class="productCount form-control" style="width:60px" min="1" value= ` + cartInfo[i].count + `></td>
		<td>`+ cartInfo[i].currency+ `<input data-currency="`+ cartInfo[i].currency+ `"  id="productSubtotal-`+i+`" class="form-control  price" disabled style="width:90px" value="`+ cartInfo[i].count * cartInfo[i].unitCost +  `"></td>
		</tr>`;  
		
		// Insertamos TR
		document.getElementById("cartItem").innerHTML = htmlContentToAppend;
	}
	
	updateTotal();
	updateShipping();
	
	document.querySelectorAll('.productCount').forEach(item => {
		item.addEventListener('change', event => {
			let newValue = event.target.value;
			// Salvamos la posicion que queremos editar en el array
			let index = event.target.getAttribute('data-index');
			// En otro data tenemos el precio
			let cost = event.target.getAttribute('data-cost');
			let subtotalElement = document.getElementById('productSubtotal-'+index);
			
			subtotalElement.value = cost * newValue;
			updateTotal();
			updateShipping();

		});
		
	});
}

// Todos los precios van en UYU
function updateTotal(){ 
	let newsubtotal = 0;
	document.querySelectorAll('.price').forEach(item => {
		let currency = item.getAttribute('data-currency');
		let price = item.value;
		// Agregamos al subtotal siempre el valor en pesos
		newsubtotal += calculateInPesos(currency, price);          
	});
	subtotal = newsubtotal;
	shippingCost = subtotal * shipping;

	document.getElementById("subTotal").innerHTML = newsubtotal + ` UYU`;   
	document.getElementById("totalAmount").innerHTML = newsubtotal + shippingCost + ` UYU`;   
	
}

function calculateInPesos(currency, cost){
	console.log(cost, currency);
	// Si es pesos no necesitamos convertir el precio
	let convertionRate = 1;
	if(currency === 'USD') {
		convertionRate = 40;
	}
	return convertionRate * cost;
}

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

function updateShipping() {
	shippingCost = subtotal * shipping;
	document.getElementById("shippingInfo").innerHTML = parseInt(shippingCost) + ` UYU` ;
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
