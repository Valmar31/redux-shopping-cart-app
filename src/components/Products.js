import React from 'react'
import Product from './Product'
const DUMMY_PRODUCTS = [
 {
  id: 1,
  name: 'MacBook',
  imgURL:
   'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  price: 25
 },
 {
  id: 2,
  name: 'Lenovo Yoga',
  imgURL: 'https://www.notebookcheck.info/uploads/tx_nbc2/yoga7i_01.jpg',
  price: 25
 },
 {
  id: 3,
  name: 'Dell lattitude',
  imgURL:
   'https://images.unsplash.com/photo-1622286346003-c5c7e63b1088?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  price: 25
 },
 {
  id: 4,
  name: 'HP Pavillion',
  imgURL:
   'https://images.unsplash.com/photo-1599299009482-3b5326fc52e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  price: 25
 },
 {
  id: 5,
  name: 'Acer Aspire',
  imgURL:
   'https://images.unsplash.com/photo-1629751372750-3ddb8f8bfd0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80',
  price: 25
 }
]
const Products = () => {
 return (
  <div>
   <ul className="products-container">
    {DUMMY_PRODUCTS.map((product, index) => (
     <li key={index}>
      <Product
       id={product.id}
       name={product.name}
       imgURL={product.imgURL}
       price={product.price}
      />
     </li>
    ))}
   </ul>
  </div>
 )
}

export default Products
