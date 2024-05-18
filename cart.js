let cartArray = JSON.parse(localStorage.getItem("cartitem"));

const cartData = document.querySelector("#div2");

function renderArray(){

if(cartArray!=null && cartArray.length > 0){

    for (let i = 0; i < cartArray.length; i++) {
      cartData.innerHTML += `<div class="card mt-4" style="width: 18rem;">
  <div class="card-body bg-dark text-light">
    <h5 class="card-title mt-3">${
      cartArray[i].brand + " " + cartArray[i].model
    }</h5>
    <p class="card-text">RAM: ${cartArray[i].ram + "GB"}</p>
    <p class="card-text">ROM: ${cartArray[i].rom + "GB"}</p>
    <p class="card-text">Camera: ${cartArray[i].camera}</p>
    <p class="card-text">Price: ${cartArray[i].price + " PKR"}</p>
    <p class="card-text">Quantity: <button onclick="plusFunct(${i})">+</button> ${
        cartArray[i].quantity
      } <button onclick="subtractFunct(${i})">-</button></p>
    <button class="btn btn-danger" onclick ="deleteItem(${i})">Remove</button>
    <div/> `;
    }


}else{
    cartData.innerHTML=`<h2 class="text-center mt-5">No Items found.....</h2>`
}
}

function deleteItem(index) {
  cartArray.splice(index , 1);
  localStorage.setItem("cartitem", JSON.stringify(cartArray));
   location.reload();
}

const totalPrice = document.querySelector("#totalamount");
function price() {
  let TotalPrice = 0;
  for (let i = 0; i < cartArray.length; i++) {
    TotalPrice = TotalPrice + cartArray[i].price * cartArray[i].quantity;
  }
  totalPrice.innerHTML = `<h3>Total Amount : ${TotalPrice} PKR</h3>`;
}
price();

renderArray();

function plusFunct(plus){

  cartData.innerHTML='';

  cartArray[plus].quantity+=1; 
  

  renderArray()
  price()
}


function subtractFunct(subtract) {
  
  
  if(cartArray[subtract].quantity===1){
    cartArray.splice(subtract, 1);
    localStorage.setItem("cartitem", JSON.stringify(cartArray));
    location.reload();
  }
  else{
    cartData.innerHTML = "";
    cartArray[subtract].quantity -= 1;
    renderArray();
    price();
    

  }


}






