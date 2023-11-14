import React from 'react';
import { products } from '../data.js'; 

function Section1() {
  return (
    <div>
      <h3>Table 1st Section</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Rate</th>
            <th scope="col">Count</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.rating.rate}</td>
              <td>{product.rating.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Section1;
