import React from "react";
import products from "../products.json";
import WishListItem from "./WishListItem.js";

function WishListContainer () {
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }

      const shuffledProducts = shuffle(products);

    return(
        <>
            {shuffledProducts.map(product => (
                <WishListItem name={product.product_name} category={product.department_name}/>
            ))}
        </>
    )
}

export default WishListContainer;