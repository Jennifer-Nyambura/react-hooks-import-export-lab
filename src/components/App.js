import React from "react";
import NavBar from "./NavBar"; // 👈 import NavBar
import Home from "./Home";     // 👈 import Home
import About from "./About";   // 👈 import About

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
