const phones = [
  {
    brand: "Samsung",
    model: "S20",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
    price: 15000,
    image: (src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVRE5yhqQNEC-k-pjXRm3MWfxII6UVZXStDen-vs813r4myrT6RqA3KV38_3LB6c2arg&usqp=CAU"),
  },
  {
    brand: "Xiomi",
    model: "Note10",
    ram: 4,
    rom: 64,
    camera: "10 megapixel",
    price: 15000,
    image: (src = "https://www.onrad.ru/upload/goods_pic_big/2723.jpg"),
  },
  {
    brand: "Infinix",
    model: "Z10",
    ram: 2,
    rom: 16,
    camera: "5 megapixel",
    price: 15000,
    image: (src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu-mpc2ANYU4b746Vf7xzV7IBhwjcpxdf2Zc_6SpdFCEpAIO0Cahc_G3dscx5OGRSgTdk&usqp=CAU"),
  },
  {
    brand: "Tecno",
    model: "Spark10",
    ram: 12,
    rom: 512,
    camera: "25 megapixel",
    price: 15000,
    image: (src =
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/0282701/1.jpg?7561"),
  },
  {
    brand: "Iphone",
    model: "14",
    ram: 4,
    rom: 1024,
    camera: "30 megapixel",
    price: 15000,
    image: (src = "https://bestphones.tn/images/iphone-14-pro-128-go-noir.jpg"),
  },
  {
    brand: "Oppo",
    model: "F11",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
    price: 15000,
    image: (src = "https://m.media-amazon.com/images/I/71ukhsF0iUL.jpg"),
  },
  {
    brand: "Vivo",
    model: "Y20",
    ram: 4,
    rom: 64,
    camera: "8 megapixel",
    price: 15000,
    image: (src =
      "https://whatsmobile.com.pk/wp-content/uploads/2022/02/Untitled-design-21.png"),
  },
  {
    brand: "Realme",
    model: "S50",
    ram: 50,
    rom: 1024,
    camera: "60 megapixel",
    price: 300000,
    image: (src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSekC926gtNVK9G4qpaN1U3Poeo3Ds9iNW0f7Eq82ZazMI6-nuk3n2tF6umzq7LthSz6O8&usqp=CAU"),
  },
];
phones.quantity=+1;

let cart=[];
let items = JSON.parse(localStorage.getItem("cartitem"));
if(items==null){
  cart=[];
}else{
  cart = items
}

console.log(items);

//Render cards in div started

const div = document.querySelector("#div");

for(let i=0; i<phones.length; i++){
    div.innerHTML += `<div class="card " style="width: 18rem;">
  <img src="${phones[i].image}" class="card-img-top" alt="product-image">
  <div class="card-body">
    <p class="card-text">${phones[i].brand + "" + phones[i].model}</p>
    <button type="button" class="btn btn-warning" onclick=addCart(${i})>Add To Cart</button>
  </div>
</div>`;

}

function addCart(addCart){
if(cart.includes(phones[addCart])){
   phones[addCart].quantity+=1;
}else{
    phones[addCart].quantity= 1;
   cart.push(phones[addCart]);
}
}



const checkOutBtn = document.querySelector("#CheckoutBtn").addEventListener('click' , function(){
  localStorage.setItem('cartitem', JSON.stringify(cart));
  window.location='cart.html';
});


