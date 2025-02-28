import { useEffect, useState } from "react";
import { RxLapTimer } from "react-icons/rx";

const CountDown = () => {
  const [targetTime] = useState(new Date().getTime() + 120 * 60 * 1000);
  const [timeLeft, setTimeLeft] = useState(targetTime - new Date().getTime());
  // console.log("use state time left", timeLeft)

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = targetTime - new Date().getTime();
      // console.log("useeffect time remaining : ", remaining)
      if (remaining <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);
  const hour = Math.floor((timeLeft / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  // console.log("minutes:", minutes)
  const seconds = Math.floor((timeLeft / 1000) % 60);
  // console.log("seconds:", seconds)
  return (
    <div className="flex flex-col justify-center items-center rotate-335 shadow-lg p-4 rounded-md ">
      <RxLapTimer className="w-8 h-8" />
      <h1 className="block text-sm">Limited Time Offer: </h1>
      <div className=" flex items-center gap-3">
        <span className="block text-5xl font-black">
          {hour}h {minutes}m {seconds}s{" "}
        </span>
        <span className="text-sm">Left</span>
      </div>
    </div>
  );
};

export default CountDown;
