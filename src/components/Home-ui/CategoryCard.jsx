import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const CategoryCard = ({ selectedCategory, sortOrder }) => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/json/category.json");
        if (!response.ok) {
          throw new Error("Failed to load category data");
        }
        const data = await response.json();
        console.log(data);
        setProductData(data);
        setLoading(false);
      } catch (error) {
        setError("Error in fetching Product Data");
        setLoading(false);
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  // Filtering and sorting category
  const filteredCategory = Object.keys(productData).reduce((acc, category) => {
    if (selectedCategory === "All" || selectedCategory === category) {
      const sortProducts = productData[category].sort((a, b) =>
        sortOrder === "lowtohigh"
          ? a.price - b.price
          : sortOrder === "hightolow"
          ? b.price - a.price
          : 0
      );
      acc.push(...sortProducts);
    }
    return acc;
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(filteredCategory.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCategory = filteredCategory.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePreviousButton = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextButton = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-6 pb-10 ">
        {paginatedCategory.map((item, index) => (
          <div
            key={index}
            className="space-y-5 shadow p-4 hover:bg-gradient-to-b hover:from-orange-200 hover:to-teal-200 mytransition"
            onClick={() => navigate(`/category/${item.category}/${index}`)}
          >
            <div className="overflow-hidden">
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-full h-80 object-cover hover:scale-110 mytransition "
              />
            </div>

            <h1 className="text-center text-2xl font-black">{item.name}</h1>
            <p className="text-center">Price : ${item.price}</p>
            <Button btnContent={"Add to Cart"} />
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex items-center justify-center gap-4 py-5 bg-slate">
        <button
          onClick={handlePreviousButton}
          disabled={currentPage === 1}
          className="w-10 h-10 flex justify-center items-center bg-slate-200 cursor-pointer rounded-full active:scale-90 mytransition"
        >
          <GoChevronLeft className="w-6 h-6" />
        </button>
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={`w-10 h-10 flex justify-center items-center ${
                currentPage === pageNumber
                  ? "bg-gradient-to-b from-orange-200 to-teal-200"
                  : "bg-slate-200"
              }  cursor-pointer `}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          className="w-10 h-10 flex justify-center items-center bg-slate-200 cursor-pointer rounded-full active:scale-90 mytransition"
          onClick={handleNextButton}
          disabled={currentPage === totalPages}
        >
          <GoChevronRight className="w-6 h-6" />{" "}
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
