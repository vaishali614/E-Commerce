import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE} from './types';

export const fetchProducts = () => {
    fetch("http://localhost:8000/products").then(res => res.json())
    .then(data => {
        return {type: FETCH_PRODUCTS, payload: data}
    });
}

export const filterProducts = (products, size) => {
    return dispatchEvent({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload:{
            size: size,
            items: size === '' ? products : products.filter(a => a.availableSizes.indexOf(size.toUppercase()) >= 0)
        }
    })
}

export const sortProducts = (products, sort) => {
    if(sort !== '')
        products.sort((a,b) => (sort === 'lowest') ? (a.price > b.price ? 1 : -1) : (a.price < b.price ? 1 : -1));
      else  
        products.sort((a,b) => (a.id < b.id ? 1 : -1)); 

    return dispatchEvent({
        type: ORDER_PRODUCTS_BY_PRICE,
        payload:{
            sort: sort,
            items: products
        }
    })
}