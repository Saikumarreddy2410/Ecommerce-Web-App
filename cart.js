let cartItemsBasket = JSON.parse(localStorage.getItem('basket'))
console.log(cartItemsBasket);
let cartBody = document.querySelector('.cart_body')
let grandTotal = document.querySelector('.grandTotal');
let cartContainer = document.getElementById('cart_det');
console.log(cartContainer);
let emptyCart = document.getElementById('emptySec');
console.log(emptyCart);

// Success page Button

let successBtn = document.getElementById('ok')
console.log(successBtn);

let bar = document.getElementById('bar');
let nav = document.getElementById('hash');
let close = document.getElementById('close')

// --------------- toggle for media queries ---------------------

if(bar){
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
}

//------------- Cart Container ----------------------------

let generateCartBody = () => {
    if(cartItemsBasket.length !== 0){
        return (cartItemsBasket.forEach((ele) =>{
            let {productId, productImg, productName, productPrice, quantity} = ele;
            return cartBody.innerHTML += `
             <tr class="cart_row" >
    
                        <td><img src="${productImg}" alt=""></td>
                        <td class="title">${productName}</td>
                        <td class="price">$ ${productPrice}</td>
                        <td ><input class="quantity" type="number" data-id=${productId} value="${quantity}" ></td>
                        <td class="itemTotal"> $ ${productPrice * quantity}</td>
                        <td><i data-id=${productId} class="fa fa-circle-xmark itemremove" ></i></td>
    
                      </tr> `
        }))
    } else {
        cartContainer.innerHTML= " ";
        emptyCart.innerHTML = `
        <h2>Your cart is empty!</h2>
        <img src="Emptycart.jpg" width="30%" height="30%" alt="">
        <button onClick="window.location.href ='Ecommerce.html';" class="shopnow"> Shop now </button>`
} 
}

generateCartBody()


let total = () =>{
    grandTotal.innerHTML = `$ ${cartItemsBasket.map((x) => x.quantity * x.productPrice).reduce((x, y) => x + y, 0)}`;
    
}
total()

// ---------------  Remove Cart Items -----------------------------------

let removeItem = (event) => {
    let removeProductId = Number(event.target.getAttribute('data-id'))
    console.log(removeProductId);
    let updatedCart = cartItemsBasket.filter((ele) => ele.productId != removeProductId)
    console.log(cartItemsBasket);
    localStorage.setItem('basket',JSON.stringify(updatedCart))
    window.location.reload();

}


let removeBtn = document.querySelectorAll('.itemremove')
console.log(removeBtn);
for (let i = 0; i < removeBtn.length; i++){
    removeBtn[i].addEventListener('click',removeItem) 
    
}

// ------------------ Quantity Change ------------------------------------------------

let quantityChange = (e) => {
    let inputId = Number(e.target.getAttribute('data-id'))
    console.log(inputId);
    
    if(e.target.value <= 0){
        let updatedCart = cartItemsBasket.map((ele)=> {
           if(ele.productId == inputId){
            return {...ele,'quantity':1}
           }
           return ele
        })
        console.log('update CartItems',updatedCart)
        localStorage.setItem('basket',JSON.stringify(updatedCart))
        

    }
    else {
        let updatedCart = cartItemsBasket.map((ele)=> {
            if(ele.productId == inputId){
                console.log(e.target.value);
             return {...ele,'quantity':Number(e.target.value)}
            }
            return ele
         })
         
         console.log('update CartItes',updatedCart)
         localStorage.setItem('basket',JSON.stringify(updatedCart))
    }
    window.location.reload();
    total()

}

// -------------------  Getting Quantity Element  ----------------------------------

let quantityBtn = document.getElementsByClassName('quantity')
    for (let i = 0; i < quantityBtn.length; i++){
        quantityBtn[i].addEventListener('change',quantityChange)
    }


// -------------  Cart Successfull page  --------------------------  

successBtn.addEventListener('click',success());

function success(){
    window.location.href = "./Cart.html";
    cartBody.innerHTML = ''
}

