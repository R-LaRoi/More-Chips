import React from "react";
import Header from "./MoreChips/Header";
import SectionOne from "./MoreChips/SectionOne";

import "./App.css";
import Monday from "./MoreChips/Monday";
import Tuesday from "./MoreChips/Tuesday";

function App() {
  return (
    <div className="main">
      <Header />
      <SectionOne />
      <Monday />
      <Tuesday />
    </div>
  );
}

export default App;
