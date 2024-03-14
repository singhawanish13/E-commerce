import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import ChildComponent from './ChildComponent'; // Import your ChildComponent
import SingleProduct from './SingleProduct';

function DisplayProduct(props) {
  const [finalPro, setFinalProducts] = useState([]);
  const { productID } = useParams();

  const getProducts = () => {
    axios("https://dummyjson.com/products")
      .then((proRes) => proRes.data)
      .then((finalRes) => {
        setFinalProducts(finalRes.products);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Declare itemInfo outside of the try-catch block
  let itemInfo;

  try {
    // Find the item with the matching productID
    const product = finalPro.find((e) => e.id === Number(productID));
    if (product) {
      itemInfo = product;
    }
  } catch (error) {
    console.error(error);
  }

  // console.log(finalPro);

  return (
    <div>
      {/* Check if itemInfo is defined before accessing its properties */}
      {itemInfo && <SingleProduct itemInfo={itemInfo} />}
    </div>
  );
}

export default DisplayProduct;
