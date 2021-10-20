import React from "react";
import Header from "./components/Header";
import ShowImg from "./components/ShowImg";
import Interactive from "./components/Interactive";
import Creations from "./components/Creations";
import CreationsDesktop from "./components/CreationsDesktop";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Header />
      <ShowImg />
      <Interactive />
      <Creations />
      <CreationsDesktop/>
      <Footer />
    </>
  );
};

export default App;
