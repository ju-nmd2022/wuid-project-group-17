const buy_now = document.getElementById("buy_now");
const background = document.getElementById("background");
const popup = document.getElementById("popup");
let selected_quantity = document.getElementById("quantity").value;
const item_price = document.getElementById("price").innerHTML;
const checkout = document.getElementById("checkout");
const total_price = document.getElementById("total_price");

background.style.visibility = "hidden";
popup.style.visibility = "hidden";

buy_now.addEventListener("click", function () {
  background.style.visibility = "visible";
  popup.style.visibility = "visible";
});

quantity.addEventListener("click", function () {
  selected_quantity = document.getElementById("quantity").value;
  document.getElementById("total_price").innerHTML =
    selected_quantity * item_price;
});
