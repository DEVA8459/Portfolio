import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Page1Bottom from "../component/Page1Bottom";
import TiltText from "../component/TiltText";
import { useState, useRef } from "react";
import "../../src/index.css";
import TypeAnimation from "../component/TypeAnimation";
const Page1 = () => {
  const tiltRef = useRef(null);

  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoving = (e) => {
    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        60
    );
    setYVal(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 20
    );
  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: ` rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 5,
        ease: "elastic.out(1,0.3)",
      });
    },
    [xVal, yVal]
  );

  return (
    <div
      id="page1"
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="h-screen p-7 relative bg-gray-400"
    >
      <div
        id="page1-in"
        className="relative shadow-xl p-24 shadow-grey-700 h-full bg-cover w-full rounded-[50px] bg-[url(https://www.aaronreedphotography.com/images/640/The-Crown-1800BW.webp)]"
      >
        <TypeAnimation/>
        
        <TiltText abc={tiltRef} />

        
        <Page1Bottom />
        
      </div>
    </div>
  );
};

export default Page1;
