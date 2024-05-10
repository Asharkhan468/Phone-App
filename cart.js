let arr;
let cartarray = JSON.parse(localStorage.getItem('cartItem'));

const cartdata = document.querySelector("#cart-item");

function renderItem(){
if(cartarray!=null && cartarray.length>0){
    for(let i=0; i<cartarray.length; i++){
        cartdata.innerHTML += `<div class="card mt-4" style="width: 18rem;">
  <div class="card-body bg-dark text-light">
    <h5 class="card-title mt-3">${
      cartarray[i].brand + " " + cartarray[i].model
    }</h5>
    <p class="card-text">RAM: ${cartarray[i].ram + "GB"}</p>
    <p class="card-text">ROM: ${cartarray[i].rom + "GB"}</p>
    <p class="card-text">Camera: ${cartarray[i].camera}</p>
    <p class="card-text">Price: ${cartarray[i].price + " PKR"}</p>
    <p class="card-text">Quantity: ${cartarray[i].quantity}</p>
    <div/> `;
    }
}else{
    cartdata.innerHTML+=`<h2 class="mt-3">No item found....</h2>`
}
}


renderItem()


 



