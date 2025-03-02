import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../ui/Button";
import ProductDetailsHeader from "../Product-details-ui/ProductDetailsHeader";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useCart } from "../context/CartContext";

const CategoryDetails = () => {
  const { category, id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [count, setCount] = useState(1);
  const { addToCart } = useCart();
  const [isModalOpen , setIsModalOpen] = useState(false);
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch("/json/category.json");
        if (!response.ok) {
          throw new Error("Error in fetching products details");
        }
        const data = await response.json();
        console.log("Fetched Data:", data); // Log the fetched data

        const productIndex = parseInt(id, 10);
        console.log("Category:", category, "Product Index:", productIndex); // Log category and product index

        if (data[category] && data[category][productIndex]) {
          const categorydata = data[category][productIndex];
          console.log("Product Details:", categorydata); // Log the product details
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
    if (productDetails?.image?.length) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === productDetails.image.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (productDetails?.image?.length) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? productDetails.image.length - 1 : prevIndex - 1
      );
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    const item = {
      name: productDetails.name,
      price: productDetails.price,
      image: productDetails.image[0],
      size: selectedSize,
      quantity: count,
      category: productDetails.category,
      date: new Date().toLocaleDateString(),
    };
    addToCart(item);
    setIsModalOpen(true);
    setCount(1);
    setSelectedSize(null);
  };
  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!productDetails) {
    return <div>No product details found.</div>;
  }

  const handleIncreaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecreaseCount = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  };
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
              className="w-full h-100 object-cover "
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
                  onClick={() => setCurrentImageIndex(index)}
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
          {/* counter  */}
          <div className=" flex items-center gap-5">
            <button
              className="h-10 w-10 bg-slate-200 text-lg active:scale-90 mytransition flex justify-center items-center rounded-full cursor-pointer"
              onClick={handleDecreaseCount}
            >
              -
            </button>
            <button>{count}</button>
            <button
              className="h-10 w-10 bg-slate-200 text-lg active:scale-90 mytransition flex justify-center items-center rounded-full cursor-pointer"
              onClick={handleIncreaseCount}
            >
              +
            </button>
          </div>

          {/* size  */}
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
          <div onClick={handleAddToCart}>
            <Button btnContent={"Add to Cart"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryDetails;
