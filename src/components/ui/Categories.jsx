import { useState } from "react";
import CategoryCard from "../Home-ui/CategoryCard";
import { MdOutlineDiscount } from "react-icons/md";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");
  const categoryArray = ["All", "sneakers", "formal", "sports", "casual"];
  return (
    <>
      <section className="max-w-6xl mx-auto p-10 md:space-y-10 space-y-5 ">
        <div className="space-y-6">
          <h1 className="text-5xl hover:underline underline-offset-4 decoration-1 cursor-pointer  font-black">
            Categories
          </h1>
          <nav className=" w-full flex md:flex-row flex-col justify-between md:items-center items-start md:gap-0 gap-5">
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
            <div className="flex mmd:flex-row flex-col gap-0 mmd:gap-4 items-center">
              <label htmlFor="">Sort by Price:</label>
              <select
                onChange={(e) => setSortOrder(e.target.value)}
                value={sortOrder}
                className="p-2 outline-none border border-slate text-sm font-light"
              >
                <option value="sortbyprice" className="p-2">
                  Sort by Price:
                </option>
                <option value="lowtohigh" className="p-2">
                  Low to High
                </option>
                <option value="hightolow" className="p-2">
                  High to Low
                </option>
              </select>
            </div>
          </nav>
        </div>

        <div className="h-10 bg-slate text-white font-light flex justify-center items-center text-sm tracking-widest">
          <div>
            {" "}
            {selectedCategory === "All" ? (
              <div className=" flex justify-center items-center gap-5">
                <p>
                  Find Your Perfect Pair – Style, Comfort, and Performance!{" "}
                </p>
                <a
                  href="/deals"
                  className="underline underline-offset-4 decoration-1 text-orange-300 hover:text-teal-200 text-12 mytransition flex items-center gap-3 "
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2331/2331891.png"
                    alt="best-deal-icon"
                    className="w-5 h-5"
                  />{" "}
                  Check Our Latest Deals!
                </a>
              </div>
            ) : selectedCategory === "sneakers" ? (
              "Step Into Style – Shoes for Every Occasion!"
            ) : selectedCategory === "formal" ? (
              "Elevate Your Style – Shoes for Every Occasion!"
            ) : selectedCategory === "sports" ? (
              <div className=" flex justify-center items-center gap-5">
                <p>Step Up Your Game – Shoes for Every Sport!</p>
                <a
                  href="/deals"
                  className="underline underline-offset-4 decoration-1 text-orange-300 hover:text-teal-200 text-12 mytransition flex items-center gap-3"
                >
                  <MdOutlineDiscount className="w-4 h-4" />
                  Get 20% Off Now!
                </a>
              </div>
            ) : selectedCategory === "casual" ? (
              "Stay Comfortable and Stylish – Shoes for Every Occasion!"
            ) : (
              ""
            )}
          </div>
        </div>
        {/* ========== category card===========  */}
        <div className="cards">
          <CategoryCard
            selectedCategory={selectedCategory}
            sortOrder={sortOrder}
          />
        </div>
      </section>
    </>
  );
};

export default Categories;
