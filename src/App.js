import "./App.css";
import Category from "./Category";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
// import Cart  from "./Cart";
import {Link} from "react-router-dom"
import { Footer } from "./Footer/Footer";
// import DisplayProduct from "./DisplayProduct";

function App() {
  const [finalCategory, setFinalCategory] = useState([]);
  const [finalPro, setFinalProducts] = useState([]);
  const [catName, setCatname] = useState("");

  const getCategory = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((finalRes) => {
        setFinalCategory(finalRes);
      });
  };

  const getProducts = () => {
    axios("https://dummyjson.com/products")
      .then((proRes) => proRes.data)
      .then((finalRes) => {
        setFinalProducts(finalRes.products);
      });
  };

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  useEffect(() => {
    if (catName !== "") {
      axios
        .get(`https://dummyjson.com/products/category/${catName}`)
        .then((proRes) => proRes.data)
        .then((finalRes) => {
          setFinalProducts(finalRes.products);
        });
    }
  }, [catName]);

  const Pitems = finalPro.map((products, index) => {
    return <ProductItem key={index} pData={products} />;
  });
// console.log(finalPro)
  

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="py-[40px]">
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-center text-[40px] font-bold mb-[30px]">
            Our Products
          </h1>
          <div className="grid grid-cols-[30%_auto] gap-[20px]">
            <div className="">
              <Category finalCategory={finalCategory} setCatname={setCatname} />
            </div>

            <div>
              <div className="grid grid-cols-3 gap-5">
                {finalPro.length >= 1 ? Pitems : "No products found"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;

function ProductItem({ pData }) {
  return (
    <div className="shadow-lg pb-4">
      {/* <Link to='/displ'></Link> */}
      <Link to={`/displayproduct/${pData.id}`} ><img  src={pData.thumbnail} alt="" className="w-[100%] h-[220px]" /></Link>
      <div className="flex flex-row justify-between">
        <div>
          <h4>{pData.title}</h4>
          <b>&#8377;{pData.price}</b>
        </div>
        {/* <div>
          <button className="bg-[#6666f7] m-3 p-[3px] rounded font-[400]">Add Cart</button>
        </div> */}
      </div>
    </div>
  );
}
