import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
const CategoryCard = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/src/assets/json/category.json");
        if (!response.ok) {
          throw new Error("Failed to load catergory data");
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

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      {Object.keys(productData).map((category) => (
        <div key={category} className="grid grid-cols-3 gap-6 py-10 ">
          {productData[category].map((item, index) => (
            <div
              key={index}
              className="space-y-5 shadow p-4 hover:bg-gradient-to-b hover:from-orange-200 hover:to-teal-200 mytransition"
              onClick={() => navigate(`/category/${category}/${index}`)}
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
      ))}
    </div>
  );
};

export default CategoryCard;
