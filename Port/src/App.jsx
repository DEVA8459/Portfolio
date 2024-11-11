import React from "react";
import Page1 from "./Pages/Page1";
import Header from "./component/Header";
import Page2About from "./Pages/Page2About";
import Page3Skills from "./Pages/Page3Skills";
import Page4Projectt from "./Pages/Page4Projectt";
import Page5Contact from "./Pages/Page5Contact";

const App = () => {
  return (
    <>
      <Header />
      <Page1 />
      <Page2About />
      <Page3Skills />
      <Page4Projectt />
      <Page5Contact />
    </>
  );
};

export default App;
