const finish_purchase_background = document.getElementById(
  "finish_purchase_background"
);
const popup = document.getElementById("popup");
const card_checkbox = document.getElementById("card_checkbox");
const card_payment = document.getElementById("card_payment");
const complete_order = document.getElementById("complete_order");
const klarna_checkbox = document.getElementById("klarna_checkbox");

popup.style.visibility = "hidden";
finish_purchase_background.style.visibility = "hidden";
card_payment.style.visibility = "hidden";

card_checkbox.addEventListener("click", function () {
  card_payment.style.visibility = "visible";
});

klarna_checkbox.addEventListener("click", function () {
  card_payment.style.visibility = "hidden";
});

complete_order.addEventListener("click", function () {
  const first_name = document.getElementById("first_name").value;
  const last_name = document.getElementById("last_name").value;
  const phone = document.getElementById("phone").value;
  finish(first_name, last_name, phone);
});

function finish(f_name, l_name, p_number) {
  if ((l_name == "") & (f_name == "") & (p_number == "")) {
    popup.style.visibility = "hidden";
    finish_purchase_background.style.visibility = "hidden";
  } else {
    popup.style.visibility = "visible";
    finish_purchase_background.style.visibility = "visible";
  }
}
