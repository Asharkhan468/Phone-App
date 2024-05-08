const phones = [
  {
    brand: "Samsung",
    model: "S20",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
    price: 15000,
  },
  {
    brand: "Xiomi",
    model: "Note10",
    ram: 4,
    rom: 64,
    camera: "10 megapixel",
    price: 15000,
  },
  {
    brand: "Infinix",
    model: "Z10",
    ram: 2,
    rom: 16,
    camera: "5 megapixel",
    price: 15000,
  },
  {
    brand: "Tecno",
    model: "Spark10",
    ram: 12,
    rom: 512,
    camera: "25 megapixel",
    price: 15000,
  },
  {
    brand: "Iphone",
    model: "14",
    ram: 4,
    rom: 1024,
    camera: "30 megapixel",
    price: 15000,
  },
  {
    brand: "Oppo",
    model: "F11",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
    price: 15000,
  },
  {
    brand: "Vivo",
    model: "Y20",
    ram: 4,
    rom: 64,
    camera: "8 megapixel",
    price: 15000,
  },
  {
    brand: "Realme",
    model: "S50",
    ram: 50,
    rom: 1024,
    camera: "60 megapixel",
    price: 300000,
  },
];





let div = document.querySelector("#div");

for (let i = 0; i < phones.length; i++) {
  phones[i].quantity=1;
  div.innerHTML += `<div class="card" style="width: 18rem;">
  <div class="card-body bg-dark text-light">
    <h5 class="card-title">${phones[i].brand + " " + phones[i].model}</h5>
    <p class="card-text">RAM: ${phones[i].ram + "GB"}</p>
    <p class="card-text">ROM: ${phones[i].rom + "GB"}</p>
    <p class="card-text">Camera: ${phones[i].camera}</p>
    <p class="card-text">Price: ${phones[i].price + " PKR"}</p>
    <p class="card-text">Quantity: ${phones[i].quant}</p>
  <button type="button" class="btn btn-warning" onclick="funct(${i})">Add to cart <i class="fa-solid fa-cart-shopping text-secondary"></i></button>
  </div>
</div>
    </div>`;

}

let cart = [];
function funct(index) {
  cart.push(phones[index]);

  if(cart.includes(phones[index])==true){
    phones[index] + 1;
  }else{
    cart.push(phones[index]);
  }



  console.log(cart);
}

const cartdata = document
  .querySelector("#cart")
  .addEventListener("click", function () {
    window.location = "cart.html";
  });

