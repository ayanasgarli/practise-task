import React from 'react';
import { products } from '../data.js'; 

function Section3() {
    let ratedProducts = products.reduce((prev, current)=>{
        return prev.rating.rate > current.rating.rate ? prev : current;
    })
  return (
    <div>
      <h3>Table 3rd Section</h3>
      <div className="card" >
  <div className="card-body">
    <h3 className="card-title">Title: {ratedProducts.title}</h3>
    <h6 className="card-text">Price: {ratedProducts.price}</h6>
    <h6 className="card-subtitle mb-2 text-body-secondary">Category: {ratedProducts.category}</h6>
    <p className="card-text">Rating Count: {ratedProducts.rating.count}</p>
    <p className="card-text">Description: {ratedProducts.description}</p>
  </div>
</div>

    </div>
  );
};

export default Section3;