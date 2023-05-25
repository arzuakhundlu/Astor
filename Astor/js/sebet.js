import { cartCount, cart_products, total_price } from "./queries.js";


let sebet = [];
if(localStorage.getItem("sebetim")){
    sebet = JSON.parse(localStorage.getItem("sebetim"))
}
const showCartCount = ()=> {
    cartCount.innerHTML = sebet.length;
    cart_products.innerHTML = ''
    sebet.forEach((item, i)=>{
        let card = `
        <div class="cart_product">
        <div class="product_img">
          <img src="${item.image}" alt="">
        </div>
        <div class="product_content">
          <h5>${item.name}</h5>
          <p><span class="count">${item.count} x </span><span class="money">${item.price}</span></p>
        </div>
        <span aria-label="${i}"  class="product_delete">
          <i aria-label="${i}" class="ion-android-close"></i>
        </span>
      </div>
        `
        cart_products.innerHTML +=card
    })

    let total = 0;

    sebet.forEach(item => {
        total+=Number(item.price.split("$")[1])*item.count;
    })

    total_price.innerHTML= `$${total}`
    
}
showCartCount();



let product_delete = document.querySelectorAll(".product_delete");

export const removeCart = () =>{
    for(let i = 0; i < product_delete.length; i++){
        product_delete[i].addEventListener("click", (e)=>{
            console.log('ssss', product_delete)
            const index = e.target.ariaLabel;
            console.log(index)
            sebet.splice(index, 1);
            localStorage.setItem("sebetim", JSON.stringify(sebet))
            showCartCount();
            product_delete = document.querySelectorAll(".product_delete");
            console.log('ssssaaa', product_delete)
            removeCart()

        })
    }
}
removeCart()

export const addToCart = (id, type, allData) => {
    console.log(id, type, allData)
    const check = sebet.find(item => item.id == id && item.type == type);
    console.log(type);
    if(check){
        check.count++
    }else{
        const product = allData.find(item => item.id == id);
        product.count = 1;
        product.type = type;
        console.log(product)
        sebet.push(product)
    }

    localStorage.setItem("sebetim", JSON.stringify(sebet))
    showCartCount()
    product_delete = document.querySelectorAll(".product_delete");

    removeCart()

}


