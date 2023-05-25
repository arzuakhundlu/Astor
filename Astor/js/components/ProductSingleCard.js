class ProductSingleCard{
    getRatingStar(count){
        let ratingHTML = '';
        for(let i=0;i<=5 ; i++){
            if(i<=count){
                ratingHTML+=`<i class="fa-solid fa-star"></i>`
            }else{
                ratingHTML+=`<i class="fa-regular fa-star"></i>`
            }
        }
        return ratingHTML;
    }
    render(img,name,price,rating){
        return (
            `
            <div class="products_single_cart">
                <div class="cart_image">
                  <a href="#">
                    <img
                      src="${img}"
                      alt="${name}"
                    />
                  </a>
                </div>
                <div class="cart_content">
                  <h4><a href="#">${name}</a></h4>
                  <p class="price">${price}</p>
                  <p class="rating">${this.getRatingStar(rating)}</p>
                </div>
              </div>
            `
        )
    }
}

export default new ProductSingleCard;