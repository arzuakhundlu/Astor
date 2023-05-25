class TopSellingCard{

    getColorProducts(colors){
        let colorsHTML = '';
        colors.forEach(item => {
            colorsHTML+=`
                        <li>
                          <div class="color">
                            <a href="#"
                              ><img
                                src="${item}"
                                alt=""
                            /></a>
                          </div>
                        </li>
            `
        })

        return colorsHTML;
    }
    
    render(image, name, price, color, id){
       
        return (
            `
            <div class="products_card">
                <div class="products_card_image">
                  <a href="#">
                    <img
                      src="${image}"
                      alt=""
                    />
                  </a>
                  <div class="products_card_floating_icons">
                    <span class="wishlist_icon">
                      <i class="ion-android-favorite-outline"></i>
                    </span>
                    <span class="compare_icon">
                      <i class="ion-ios-shuffle-strong"></i>
                    </span>
                    <span class="view_icon">
                      <i class="ion-ios-search-strong"></i>
                    </span>
                  </div>
                  <div class="products_card_color_variant">
                    <div class="grid_color_variant">
                      <ul>
                        ${this.getColorProducts(color)}
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="products_card_title">
                  <div class="title">
                    <h4>${name}</h4>
                    <div class="title_select">
                      <a >
                        <span>+</span>
                        <button aria-label="${id}" class="btn">Select Options</button>
                      </a>
                    </div>
                  </div>
                  <div class="price">
                    <p>${price}</p>
                  </div>
                </div>
              </div>
            `
        )
    }
}

export default new TopSellingCard;

