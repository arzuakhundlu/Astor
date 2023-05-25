export const getProducts = async () => {
    return await fetch('../db/singleProducts.json')
    .then(resp=> resp.json())
    .then(data=>{
        return data
    })
}


export const getTopSelling = async () => {
    return await fetch("../db/topSellingProducts.json")
    .then(resp => resp.json())
    .then(data=>{
        return data
    })
}


export const getFourthSingle = async () => {
    return await fetch('../db/sectionFourthSingle.json')
    .then(resp => resp.json())
    .then(data =>{
        return data
    })
}


export const getAllProductsData = async () => {
    return await fetch('../db/allProducts.json')
    .then(resp => resp.json())
    .then(data =>{
        return data
    })
}