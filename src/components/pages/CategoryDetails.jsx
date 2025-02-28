import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryDetails = () => {
  const { category, id } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch("/src/assets/json/category.json");
        if (!response.ok) {
          throw new Error("Error in fetching products details");
        }
        const data = await response.json();
        const productIndex = parseInt(id, 10);

        if (data[category] && data[category][productIndex]) {
          setProductDetails(data[category][productIndex]);
        } else {
          setError("Product not found");
        }
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [category, id]);

  if (loading) {
    return <div>Loading....</div>;
  }
  return (
    <section>

    <div className="max-w-6xl mx-auto grid grid-cols-2 gap-10 px-10 py-5">
      <div>
        <img src={productDetails.image[0]} alt={productDetails.name} className="w-full h-100 object-cover" />
      </div>
      <div>
        <h1>{productDetails.name}</h1>
        <p>{productDetails.description}</p>
        <p>Price: ${productDetails.price}</p>
        <p>{productDetails.category}</p>
      </div>
    </div>
    </section>
  );
};

export default CategoryDetails;
