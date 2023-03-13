import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import './assets/style/App.css'

function App() {
  return (
    <div className="main">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
