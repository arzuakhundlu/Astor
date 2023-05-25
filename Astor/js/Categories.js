const countCart = document.querySelector('.count_cart')
const overlay = document.querySelector('.overlay')
const categories_btn = document.querySelector('.categories_menu_title');


export function categoriesToggle(){
    let count = 0;
    categories_btn.addEventListener('click', ()=>{
        console.log(categories_btn.parentElement.childNodes[3].childNodes[1]);
       if(count == 0){
           categories_btn.parentElement.childNodes[3].style.maxHeight = '490px'
           count++
        }
        else{
            categories_btn.parentElement.childNodes[3].style.maxHeight = null
            categories_btn.parentElement.childNodes[3].style.overflow  = "hidden"   
           count = 0 
       }
   })
}



export function toggleMyCart(){
    countCart.addEventListener('click',()=>{
            overlay.style.visibility = 'visible'
            overlay.style.opacity = '1'
    })
    overlay.children[1].children[0].children[1].addEventListener('click',()=>{
        overlay.style.visibility = 'hidden'
        overlay.style.opacity = '0'
    })
}

