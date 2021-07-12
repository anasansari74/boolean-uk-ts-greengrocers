import "./style.css";
import "../styles/index.css";
import "../styles/reset.css";

// const app = document.querySelector<HTMLDivElement>("#app")!;

// const storeList =
//   document.querySelector<HTMLDataListElement>(".store--item-list")!;

// function renderStoreItems() {
//   let storeItem = document.createElement("li")
// }

type Items = { id: string; name: string; price: number };
type Cart = { id: string; name: string; price: number; quantity: number };

// Make the state ✔
let state: { items: Items[]; cart: Cart[] } = {
  // Create a products array ✔
  // Manually add all the product ✔
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35,
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.4,
    },
    {
      id: "003-apple",
      name: "apple",
      price: 1.6,
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 1.25,
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 1.6,
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.73,
    },
    {
      id: "007-bell-pepper",
      name: "bell-pepper",
      price: 0.4,
    },
    {
      id: "008-berry",
      name: "berry",
      price: 2.2,
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 1.75,
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.69,
    },
  ],
  // Create a cart array ✔
  cart: [],
};

const storeListEl = document.querySelector(".store--item-list");
const cartListEl = document.querySelector(".cart--item-list");

// Create and El for the items in the store (li)
function addItemToStore(item: Items) {
  // <li>✔
  const storeItemEl = document.createElement("li");
  storeListEl?.append(storeItemEl);

  // <div class="store--item-icon">✔
  const storeItemDivEl = document.createElement("div");
  storeItemDivEl.setAttribute("class", "store--item-icon");

  storeItemEl.append(storeItemDivEl);

  //   <img src="assets/icons/001-beetroot.svg" alt="beetroot" />
  const storeItemImageEl = document.createElement("img");
  storeItemImageEl.setAttribute("src", `./assets/icons/${item.id}.svg`);
  storeItemImageEl.setAttribute("alt", item.name);

  storeItemDivEl.append(storeItemImageEl);

  // <button>Add to cart</button>✔
  const storeItembtnEl = document.createElement("button");
  storeItembtnEl.innerText = "Add to cart";

  // make the add to cart button work (funtion? with an event listener)
  storeItembtnEl.addEventListener("click", function () {
    const itemToAdd = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    };
    // Step 1: update state.cart with a new item
    state.cart.push(itemToAdd);
    // Step 2: once it has been update, call render cart list
    renderItemsToCart();
  });

  storeItemEl.append(storeItembtnEl);
}

// render all the items onto the El (function)
function renderItemsToStore() {
  for (const product of state.items) {
    addItemToStore(product);
  }
}

// Create and El for the items being added to the cart (li) ✔
function renderCartItem(item: Items) {
  // <li>
  const cartItemEl = document.createElement("li");
  cartListEl?.append(cartItemEl);

  //   <img class="cart--item-icon" src="assets/icons/001-beetroot.svg" alt="beetroot"
  const cartImageEl = document.createElement("img");
  cartImageEl.setAttribute("class", "cart--item-icon");
  cartImageEl.setAttribute("src", `assets/icons/${item.id}.svg`);
  cartImageEl.setAttribute("alt", item.name);

  cartItemEl.append(cartImageEl);

  //   <p>beetroot</p>
  const itemNameEl = document.createElement("p");
  itemNameEl.innerText = item.name;

  cartItemEl.append(itemNameEl);

  //   <button class="quantity-btn remove-btn center">-</button>
  const cartRemoveBtnEl = document.createElement("button");
  cartRemoveBtnEl.setAttribute("class", "quantity-btn");
  cartRemoveBtnEl.setAttribute("class", "remove-btn");
  cartRemoveBtnEl.setAttribute("class", "center");
  cartRemoveBtnEl.innerText = "-";

  cartItemEl.append(cartRemoveBtnEl);

  //   <span class="quantity-text center">1</span>
  const cartSpanEl = document.createElement("span");
  cartSpanEl.setAttribute("class", "quantity-text");
  cartSpanEl.setAttribute("class", "center");
  cartSpanEl.innerText = "1";

  cartItemEl.append(cartSpanEl);

  //   <button class="quantity-btn add-btn center">+</button>
  const cartAddBtnEl = document.createElement("button");
  cartAddBtnEl.setAttribute("class", "quantity-btn");
  cartAddBtnEl.setAttribute("class", "remove-btn");
  cartAddBtnEl.setAttribute("class", "center");
  cartAddBtnEl.innerText = "+";

  cartItemEl.append(cartAddBtnEl);
}

function renderItemsToCart() {
  if (cartListEl) cartListEl.innerHTML = "";
  for (const product of state.cart) {
    renderCartItem(product);
  }
}

renderItemsToStore();
