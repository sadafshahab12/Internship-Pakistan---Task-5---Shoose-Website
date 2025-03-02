import { useEffect } from "react";
import Categories from "../ui/Categories";

const Shoes = () => {
  useEffect(() => {
    document.title = "Shoes Page - Ecommerce";
  }, []);
  return (
    <div className=" pt-20">
      <Categories heading={"Shoes"} />
    </div>
  );
};

export default Shoes;
