
import CategoryCard from "../Home-ui/CategoryCard";

const Categories = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto p-10 ">
        <div className="space-y-6">
          <h1 className="text-5xl hover:underline underline-offset-4 decoration-1 cursor-pointer text-center font-black">
            Categories
          </h1>
          <nav className=" w-full ">
            <ul className=" flex gap-20 justify-center">
              <li className="cata-nav">Sneakers</li>
              <li className="cata-nav">Formals</li>
              <li className="cata-nav">Sports</li>
              <li className="cata-nav">Casuals</li>
            </ul>
          </nav>
        </div>
        {/* ========== category card===========  */}
        <div className="cards">
          <CategoryCard />
        </div>
      </section>
    </>
  );
};

export default Categories;
