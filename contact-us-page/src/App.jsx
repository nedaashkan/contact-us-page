import React from "react";
import MainPicture from "./MainPicture.jsx";
import PageSection from "./PageSection.jsx";
import AccordionSection from "./AccordionSection.jsx";
import Footer from "./Footer.jsx";
import "./App.css";
function App() {
  return (
    <div className="container-fluid">
      <MainPicture />
      <PageSection />
      {/* <AccordionSection /> */}
      <Footer />
    </div>
  );
}

export default App;
