import { useEffect } from "react";
import Categories from "../ui/Categories";
import Hero from "../ui/Hero";

const Home = () => {
  useEffect(() => {
    document.title = "Home - Ecommerce";
  }, []);
  return (
    <div>
      <Hero />
      <Categories heading={"Category"} />
    </div>
  );
};

export default Home;
