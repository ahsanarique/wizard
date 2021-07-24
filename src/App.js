import React from "react";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import Wizard from "./Components/Wizard/Wizard";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="flex flex-col justify-center items-center">
        <Wizard />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
