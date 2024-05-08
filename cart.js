const divs = document.querySelector("#div");

let cart = [];
function funct(index) {
  cart.push(phones[index]);

  console.log(cart);
}



for(let i=0 ; i<cart.length ; i++){
    divs.innerHTML+=`<p>${cart[i]}</p>`;
}