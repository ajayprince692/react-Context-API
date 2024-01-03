// src/Components/Cards.jsx
import React, { useContext } from 'react';
import { UserContext } from '../App';
import Products from './Products';

function Cards() {
  const { products, setProducts } = useContext(UserContext);

  const handleAddQuantity = (index) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index].quantity = (updatedProducts[index].quantity || 0) + 1;
      return updatedProducts;
    });
  };

  const handleRemoveQuantity = (index) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index].quantity = Math.max((updatedProducts[index].quantity || 0) - 1, 0);
      return updatedProducts;
    });
  };

  const calculateTotalAmount = (price, quantity) => {
    return price * quantity;
  };

  return (
    <>
      <div className="text-center" id="container">
        {products.map((product, index) => (
          <Products
            key={index}
            product={product}
            onAddQuantity={() => handleAddQuantity(index)}
            onRemoveQuantity={() => handleRemoveQuantity(index)}
            calculateTotalAmount={calculateTotalAmount}
          />
        ))}
      </div>
    </>
  );
}

export default Cards;
