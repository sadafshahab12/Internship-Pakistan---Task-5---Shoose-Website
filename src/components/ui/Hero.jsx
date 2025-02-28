
import CountDown from "../Home-ui/CountDown";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-orange-100 to-teal-200 h-screen">
      <div className="max-w-6xl px-10 mx-auto relative flex justify-center items-center ">
        <div className="tag absolute bottom-30 right-10 h-25 w-25 bg-slate-800 rounded-full flex flex-col justify-center items-center text-center shadow-md shadow-orange-400 z-10">
          <p className=" text-white font-light py-2 px-4 rotate-30 text-sm block">
            Flat <span className=" text-4xl block font-bold">50%</span>off{" "}
          </p>
        </div>
        <div className="absolute top-[5%] left-0  ">
        <CountDown/>
        </div>
        <div className="animate-zoom">
          <img
            src="/hero.png"
            alt="featured-shoes"
            className="w-150 h-150 opacity-80 drop-shadow-2xl"
          />
        </div>
        <div className="absolute top-[30%] left-20 ">
          <h1 className="font-black text-8xl text-slate-700">
            Lace Up & Stand Out – Your Dream Shoes Are Here!
          </h1>
          <div className="mt-10 w-50 mx-auto">
            <Button btnContent={"Shop Now"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
