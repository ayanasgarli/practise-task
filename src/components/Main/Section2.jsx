import React from 'react';
import { products } from '../data.js'; 

function Section2() {
    let sortedProducts = products.slice().sort((a, b)=> b.price - a.price);
    console.log(sortedProducts)
  return (
    <div>
      <h3>Table 2nd Section</h3>
      <ul>
        {sortedProducts.map((product => (
            <li key={product.id} > {product.title} {product.price}</li>
        )))}
      </ul>
    </div>
  );
};

export default Section2;