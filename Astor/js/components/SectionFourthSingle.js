class SectionFourthSingle{
    render(image, name , price){
        return (
            `
            <div class="card_single">
                <a href="#">
                  <img
                    src="${image}"
                    alt=""
                  />
                </a>
                <div class="card_single_text">
                  <div class="text">
                    <p>${name}</p>
                    <span>${price}</span>
                  </div>
                </div>
              </div>
            `
        )
    }
}

export default new SectionFourthSingle