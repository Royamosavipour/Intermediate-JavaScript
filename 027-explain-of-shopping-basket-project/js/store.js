let allProduct = [
  { id: 1, title: "Album 1", price: 20, img: "Images/Album 1.png", count: 1 },
  { id: 2, title: "Album 2", price: 30, img: "Images/Album 2.png", count: 1 },
  { id: 3, title: "Album 3", price: 45, img: "Images/Album 3.png", count: 1 },
  { id: 4, title: "Album 4", price: 20, img: "Images/Album 4.png", count: 1 },
  { id: 5, title: "Cofee", price: 15, img: "Images/Cofee.png", count: 1 },
  { id: 6, title: "Shirt", price: 10, img: "Images/Shirt.png", count: 1 },
];
let $ = document;
let shop = $.querySelector(".shop-items");
let cartItem = $.querySelector(".cart-items");
let removAllItem = $.querySelector("#Remove-all-Item");
let totalPrice = $.querySelector(".cart-total-price");
let userBasket = [];

// All Product To container for select*****************
allProduct.forEach(function (product) {
  let shopItem = $.createElement("div");
  shopItem.classList.add("shop-item");

  let shopItemTitle = $.createElement("span");
  shopItemTitle.innerHTML = product.title;
  shopItemTitle.classList.add("shop-item-title");

  let shopItemImage = $.createElement("img");
  shopItemImage.setAttribute("src", product.img);
  shopItemImage.classList.add("shop-item-image");

  let shopItemDetails = $.createElement("div");
  shopItemDetails.classList.add("shop-item-details");

  let priceItem = $.createElement("span");
  priceItem.innerHTML = product.price;
  priceItem.classList.add("shop-item-price");

  let button = $.createElement("button");
  button.className = "btn btn-primary shop-item-button";
  button.innerHTML = "ADD TO CART";

  //set event click for add*******************
  button.addEventListener("click", function () {
    addTobasket(product.id);
  });

  shopItemDetails.append(priceItem, button);
  shopItem.append(shopItemTitle, shopItemImage, shopItemDetails);
  shop.append(shopItem);
});

//product to bascket************************
function addTobasket(productId) {
  let mainProduct = allProduct.find(function (product) {
    return product.id === productId;
  });
  userBasket.push(mainProduct);

  generaitionProduct(userBasket);
  calculatTotalPrice(userBasket);
}

//generaition Product to Basket*******************

function generaitionProduct(bascket) {
  cartItem.innerHTML = ""; // Empty content**************
  bascket.forEach(function (product) {
    let cartRow = $.createElement("div");
    cartRow.classList.add("cart-row");

    let cartDetail = $.createElement("div");
    cartDetail.className = "cart-item cart-column";

    let cartImg = $.createElement("img");
    cartImg.setAttribute("src", product.img);
    cartImg.setAttribute("width", "100");
    cartImg.setAttribute("height", "100");
    cartImg.classList.add("cart-item-image");

    let span = $.createElement("span");
    span.innerHTML = product.title;
    span.classList.add("cart-item-title");

    cartDetail.append(cartImg, span);

    let spanPrice = $.createElement("span");
    spanPrice.className = "cart-price cart-column";
    spanPrice.innerHTML = product.price;

    let cartContainer = $.createElement("div");
    cartContainer.className = "cart-quantity cart-column";

    let inputbasket = $.createElement("input");
    inputbasket.classList.add("cart-quantity-input");
    inputbasket.value = product.count;
    inputbasket.setAttribute("type", "number");
    inputbasket.addEventListener("change", function () {
      updatcount(product.id, inputbasket.value);
    });

    let buttonBasket = $.createElement("button");
    buttonBasket.innerHTML = "REMOVE";
    buttonBasket.className = "btn btn-danger";
    buttonBasket.addEventListener("click", function () {
      removeFromBascket(product.id);
    });

    cartContainer.append(inputbasket, buttonBasket);
    cartRow.append(cartDetail, spanPrice, cartContainer);
    cartItem.append(cartRow);
  });
}

function removeFromBascket(productId) {
  userBasket = userBasket.filter(function (product) {
    return product.id !== productId;
  });
  generaitionProduct(userBasket);
}

removAllItem.addEventListener("click", function () {
  userBasket = [];
  generaitionProduct(userBasket);
});

function calculatTotalPrice(userBasket) {
  let total = 0;
  userBasket.forEach(function (product) {
    total += product.count * product.price;
  });

  totalPrice.innerHTML = total;
}

function updatcount(productId, newCount) {
  userBasket.forEach(function (product) {
    if (product.id===productId) {
        product.count=newCount
    }
  });
  calculatTotalPrice(userBasket)
}
