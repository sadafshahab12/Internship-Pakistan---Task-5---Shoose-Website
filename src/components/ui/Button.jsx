const Button = ({ btnContent }) => {
  return (
    <>
      <button className="bg-slate text-12 sm:text-sm md:text-lg text-white font-light py-2 px-4 cursor-pointer border border-slate w-full hover:bg-transparent hover:border-slate hover:text-slate hover:font-medium transition-all ease-in duration-200 tracking-wider active:scale-95 ">
        {btnContent}
      </button>
    </>
  );
};

export default Button;
