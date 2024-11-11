/* eslint-disable react/prop-types */
const TiltText = (props) => {
  return (
    <div id="tiltDiv" ref={props.abc} className="mt-80">
      <h1 className="text-[4.3vw] uppercase font-[anzo2] leading-[4vw]">
        I am <span className="text-black">devendra Gour</span>™
      </h1>
      <h1 className="text-[8vw] leading-[8vw] font-[anzo]">DEVELOPER</h1>
      <h1 className="text-[4.3vw] leading-[4vw] uppercase font-[anzo2]">TO HIRE</h1>
    </div>
  );
};

export default TiltText;
