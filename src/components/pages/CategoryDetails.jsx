import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../ui/Button";
import ProductDetailsHeader from "../Product-details-ui/ProductDetailsHeader";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const CategoryDetails = () => {
  const { category, id } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
          const categorydata = data[category][productIndex];
          setProductDetails(categorydata);
          setCurrentImageIndex(0);
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
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productDetails.image.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productDetails.image.length - 1 : prevIndex - 1
    );
  };
  if (loading) {
    return <div>Loading....</div>;
  }
  if (!productDetails) return null;
  return (
    <section>
      <ProductDetailsHeader
        name={productDetails.name}
        category={productDetails.category}
      />
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-10 px-10 py-15">
        <div className="space-y-3">
          <div className="relative">
            <img
              src={productDetails.image[currentImageIndex]}
              alt={productDetails.name}
              className="w-full h-100 object-cover"
            />
            <div className="flex items-center gap-3 absolute top-5 right-5 z-10">
              <div className="imageChevron" onClick={handleNextImage}>
                <GoChevronLeft className="w-6 h-6 cursor-pointer" />
              </div>
              <div className="imageChevron" onClick={handlePrevImage}>
                <GoChevronRight className="w-6 h-6 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            {productDetails.image.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={image}
                  className={`w-20 h-20 object-cover rounded-md cursor-pointer`}
                 onClick={()=> setCurrentImageIndex(index)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-6xl font-black">{productDetails.name}</h1>
          <p className="text-lg">Price: ${productDetails.price}</p>
          <p className=" bg-slate text-white py-1.5 px-3 rounded-full inline text-sm border hover:border-orange-500 hover:text-orange-500 mytransition cursor-pointer">
            {productDetails.category}
          </p>
          <p className="py-5 text-lg">{productDetails.description}</p>
          <div className="size flex gap-3 items-center ">
            <h1>Select Size:</h1>
            {productDetails.sizes?.map((size) => (
              <button
                key={size}
                className={`flex justify-center items-center h-10 w-10 border rounded-md text-16 cursor-pointer active:scale-95 ${
                  selectedSize === size
                    ? "bg-gradient-to-br from-teal-300   to-orange-300 border-none"
                    : " text-gray-800 hover:bg-orange-200"
                } mytransition`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <Button btnContent={"Add to Cart"} />
        </div>
      </div>
    </section>
  );
};

export default CategoryDetails;
