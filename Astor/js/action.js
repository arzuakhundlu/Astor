import ProductSingleCard from "./components/ProductSingleCard.js"
import { getProducts , getTopSelling , getFourthSingle, getAllProductsData  } from "./config.js"
import { newArrivals, featuredProducts, bestSeller , topSelling, fourthCards, allProducts } from './queries.js';
import TopSellingCard from "./components/TopSellingCard.js";
import SectionFourthSingle from "./components/SectionFourthSingle.js";
import AllProductsCard from "./components/AllProductsCard.js";
import { addToCart } from "./sebet.js";

export const getAllActions = () => {
    getProducts()
    .then(data=>{
        // console.log(data)
        data.forEach(item=>{
            if(item.type == "new_arrivals"){
                newArrivals.innerHTML += ProductSingleCard.render(item.image, item.name , item.price ,item.rating)
            } else if(item.type == "featured_products"){
                featuredProducts.innerHTML += ProductSingleCard.render(item.image, item.name , item.price ,item.rating)
            }else if(item.type == "best_seller"){
                bestSeller.innerHTML += ProductSingleCard.render(item.image, item.name , item.price ,item.rating)
            }

        })
    })
}

export const getAllTopSelling = () => {
    
    getTopSelling()
    .then(data=>{
        data.forEach(item=>{
            // console.log(item.name);
            topSelling.innerHTML += TopSellingCard.render(item.image, item.name, item.price, item.color, item.id )
        })

        const btns = document.querySelectorAll(".btn");
        for(let i = 0; i < btns.length; i++){
            btns[i].addEventListener("click", (e)=>{
                const id = e.target.ariaLabel;
                addToCart(id, "top_selling", data)
            })
        }
    })
}

export const getAllFourthSingle = () => {
    getFourthSingle()
    .then(data => {
        // console.log(data);
        data.forEach(item =>{
            fourthCards.innerHTML += SectionFourthSingle.render(item.image, item.name, item.price)
        })

    })
}

export const getAllProducts = () => {
    getAllProductsData()
    .then(data=>{
        // console.log(data);
        data.forEach(item => {
            allProducts.innerHTML += AllProductsCard.render(item.image, item.name, item.price, item.colors, item.id)
        })


        const btns = document.querySelectorAll(".btn");
        for(let i = 0; i < btns.length; i++){
            btns[i].addEventListener("click", (e)=>{
                const id = e.target.ariaLabel;
                addToCart(id, "all_products", data)
            })
        }

    })
}

