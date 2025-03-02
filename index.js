
//  I create a dynamic shopping cart where 
// users can increase or decrease product quantities, and the cart updates automatically.


//create two div containers 
const productContainer = document.querySelector(".product");
const cartContainer = document.querySelector(".cart-container");

//  List product with 
const productArr = [
    {  id: 1, name: "Product-1", price: "100", qty: "2" },
    {  id: 2, name: "Product-2", price: "200", qty: "3" },
    {  id: 3, name: "Product-3", price: "300", qty: "0"}
];

let cartArr = [...productArr];

//function update to modify qty on click 

function updateCart(id , changeQty) {
    cartArr = cartArr.map((item) => {
        if (item.id == id) {
            item.qty = Number(item.qty) + changeQty;
           
        }
        return item;
    });
    ChangeCart(); // after update change  the cart
}


productArr.map((product) => {

    const productDiv = document.createElement("div");

    const name = document.createElement("p");
    const price = document.createElement("p");

    const btnParent = document.createElement("div");
    btnParent.classList.add("btn-parent");

    const qty = document.createElement("span");
    const minusbtn = document.createElement("span");
    const plusbtn = document.createElement("span");

    name.innerText = product.name;
    price.innerText = product.price;
    qty.innerText = product.qty;
    minusbtn.innerText = "-";
    plusbtn.innerText = "+";

    minusbtn.style.fontSize = "1.32rem";
    plusbtn.style.fontSize = "1.32rem";

    if (plusbtn.innerText === "+") {
        plusbtn.addEventListener("click", () => {
            qty.innerText = Number(qty.innerText) + 1;
            updateCart(product.id, 1);

        })
    }
    if (minusbtn.innerText === "-") {
        minusbtn.addEventListener("click", () => {
            qty.innerText = Number(qty.innerText) - 1;
            updateCart(product.id, -1);


        })
    }

    productDiv.classList.add("product-Div");
    btnParent.append(minusbtn, qty, plusbtn);

    productDiv.append(name, price, btnParent);
    productContainer.appendChild(productDiv);


});

// function to change cart items

function ChangeCart() {
    cartContainer.innerHTML= "";
    let finalTotal = 0;

    cartArr.forEach((cartProduct) => {
        //show cart itemss
        if (cartProduct.qty > 0) {

            const cartDiv = document.createElement("div");
            const cartname = document.createElement("p");
            let total = document.createElement("p");
            let cartqty = document.createElement("span");
            const multiply = document.createElement("span");
            let cartprice = document.createElement("span");

            cartDiv.classList.add("cart-Div");

            cartqty.innerText = cartProduct.qty;
            cartprice.innerText = cartProduct.price;
            cartname.innerText = cartProduct.name;


            total.innerText = `${cartqty.innerText} x ${cartprice.innerText}`;

            finalTotal += (cartProduct.qty * cartProduct.price);

            cartDiv.append(cartname, total);
            cartContainer.appendChild(cartDiv);

        }

    });

    totalSum(finalTotal);
}
//function to show the total final price
function totalSum(finalTotal) {
    const totalDiv = document.createElement("div");
    const totalprice = document.createElement("p");
    totalDiv.classList.add("total-Div");

    totalprice.innerHTML = `Total : <span class="total-price"> ${finalTotal}</span>`;

    totalDiv.appendChild(totalprice);
    cartContainer.appendChild(totalDiv);

}
ChangeCart();



