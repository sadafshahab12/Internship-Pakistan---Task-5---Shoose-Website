import { useState } from "react";
import CategoryCard from "../Home-ui/CategoryCard";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder , setSortOrder] = useState("");
  const categoryArray = ["All", "sneakers", "formal", "sports", "casual"];
  return (
    <>
      <section className="max-w-6xl mx-auto p-10 ">
        <div className="space-y-6">
          <h1 className="text-5xl hover:underline underline-offset-4 decoration-1 cursor-pointer  font-black">
            Categories
          </h1>
          <nav className=" w-full flex justify-between">
            {/* filter by category  */}
            <ul className=" flex gap-20 bg-slate-200 py-3 px-4">
              {categoryArray.map((cata) => (
                <li
                  key={cata}
                  className={`cata-nav ${
                    selectedCategory === cata ? "font-bold underline" : "*:"
                  }`}
                  onClick={() => setSelectedCategory(cata)}
                >
                  {cata}
                </li>
              ))}
            </ul>
            {/* filter by price  */}
            <div className="flex gap-4 items-center">
              <label htmlFor="">Sort by Price:</label>
              <select onChange={(e)=> setSortOrder(e.target.value)} value={sortOrder} className="p-2 outline-none border border-slate text-sm font-light">
                <option value="sortbyprice" className="p-2">Sort by Price:</option>
                <option value="lowtohigh" className="p-2">Low to High</option>
                <option value="hightolow" className="p-2">High to Low</option>
              </select>
            </div>
          </nav>
        </div>
        {/* ========== category card===========  */}
        <div className="cards">
          <CategoryCard selectedCategory={selectedCategory} sortOrder={sortOrder}/>
        </div>
      </section>
    </>
  );
};

export default Categories;
