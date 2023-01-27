import {
    featureProductsArray,
    newArrivalsArray,
    productsArray
  } from "./newArrival-Products.js";

  let basket = [];
  console.log(basket)
  

  let bar = document.getElementById('bar');
  let nav = document.getElementById('hash');
  let close = document.getElementById('close')
  

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


  //            iterating The featureProduct data
  
  let featureContainer = document.querySelector(".featureProducts");
  console.log(featureContainer);

  featureProductsArray.forEach((ele) =>{
    let {productId, productImg, productBrand, productName, productPrice} = ele;
    return (featureContainer.innerHTML +=  `
    <div id=${productId} class='pro'>
                  <img class="image" src=${productImg} onClick="window.location.href='Singlepro.html';">
                  <div id="pro_des">
                      <p class="brand">${productBrand}</p>
                      <h5 class="name">${productName}</h5>   
                      <div class="star">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                      </div>
                   
                  </div>
                  <div class="price">
                      <h4 class="itemPrice">$ ${productPrice}</h4>
                      <a ><i  data-id=${productId}  class="fa fa-shopping-cart addToCart"  ></i></a>
                  </div>
          </div>`)
  }) 


  //iterating The newarrival data
  
  let newArrivalContainer = document.querySelector(".newArrivals");
  console.log(newArrivalContainer);

 newArrivalsArray.forEach((ele)=>{
    let {productId, productImg, productBrand, productName, productPrice} = ele;
    return (newArrivalContainer.innerHTML += `
    <div id=${productId} class='pro'>
                  <img class="image" src=${productImg} onClick="window.location.href='Singlepro.html';">
                  <div id="pro_des">
                      <p class="brand">${productBrand}</p>
                      <h4 class="name">${productName}</h4>   
                      <div class="star">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                      </div>
                   
                  </div>
                  <div class="price">
                      <h4 class="itemPrice">$ ${productPrice}</h4>
                      <a ><i  data-id=${productId}  class="fa fa-shopping-cart addToCart"  ></i></a>
                  </div>
          </div>`)
  }) 

let addBtn = document.querySelectorAll('.addToCart')
//  console.log('btnCollection',addBtn);

addBtn.forEach(function(currentBtn){
    currentBtn.addEventListener('click', addToCartFut)
  })


function addToCartFut(e){
    let cartPositionId = Number(e.target.getAttribute('data-id'))
    let product = productsArray.find( ele => ele.productId == cartPositionId)

    if(basket.length == 0){
        basket.push({...product,'quantity':1})
        console.log('updated basket1',basket);
        localStorage.setItem('basket',JSON.stringify(basket));
       } else {
        let objectCheck = basket.find((ele)=>ele.productId == cartPositionId)
        if(!objectCheck){
            basket.push({...product,'quantity':1})
            console.log('updated basket2',basket);
            localStorage.setItem('basket',JSON.stringify(basket));
        }
    }
   
}

 














