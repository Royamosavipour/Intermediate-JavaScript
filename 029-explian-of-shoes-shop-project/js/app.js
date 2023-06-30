// DOM => Document Object Model
// BOM => Browser Object Model

let productAllArry = [
  { id: 1, titel: "Sport Shoes", price: 20,img:'images/1.png' },
  { id: 2, titel: "Women Shoes", price: 40,img:'images/2.png' },
  { id: 3, titel: "Boots", price: 40,img:'images/3.png' },
];
let container = document.querySelector(".container");

productAllArry.forEach(function (product) {
  container.insertAdjacentHTML(
    "beforeend",
    '<div class="product-card"><h1>'+product.titel+'</h1><p>Lorem ipsum, or lipsum as it is sometimes known</p><div class="product-pic" style="background-image: url('+product.img+');"></div><div class="product-info"><div class="product-price">$'+product.price+'</div><a href="product.html?id='+product.id+'" class="product-button">See More</a></div></div>'
  );
});
