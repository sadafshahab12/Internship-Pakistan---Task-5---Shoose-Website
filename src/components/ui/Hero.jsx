
import CountDown from "../Home-ui/CountDown";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-orange-100 to-teal-200 h-[70vh] xs:h-[85vh] sm:h-screen">
      <div className="max-w-6xl px-10 mx-auto relative flex justify-center items-center h-[70vh] xs:h-[85vh] sm:h-screen ">
        <div className="tag absolute bottom-10 xxs:bottom-15 xs:bottom-30 sm:bottom-20 right-5 xxs:right-10 h-15 xs:h-20 sm:h-25 w-15 xs:w-20 sm:w-25 bg-slate-800 rounded-full flex flex-col justify-center items-center  text-center shadow-md shadow-orange-400 z-10 ">
          <p className=" text-white font-light py-2 px-4 rotate-30 text-12 xs:text-sm block">
            Flat <span className=" text-xl xs:text-3xl sm:text-4xl block font-bold">50%</span>off{" "}
          </p>
        </div>
        <div className="absolute top-[12%] xxs:top-[15%] xs:top-[10%] left-0  ">
        <CountDown/>
        </div>
        <div className="animate-zoom absolute top-20 xxs:top-15 xs:top-10 ">
          <img
            src="/hero.png"
            alt="featured-shoes"
            className="w-60 xxs:w-80 xs:w-100 sm:w-150  h-60 xxs:h-70 xs:h-100 sm:h-150 opacity-80 drop-shadow-2xl "
          />
        </div>
        <div className="absolute top-[38%]  xs:top-[30%] sm:top-[30%] left-5 xxs:left-10 xs:left-15 sm:left15 md:left-30 p-3  ">
          <h1 className="font-black text-[34px] xs:text-5xl sm:leading-none leading-10 xs:leading-16 sm:text-7xl mmd:text-[85px] text-slate-700">
            Lace Up & Stand Out – Your Dream Shoes Are Here!
          </h1>
          <div className="mt-5 sm:mt-10 w-30 xs:w-50  ">
            <Button btnContent={"Shop Now"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
