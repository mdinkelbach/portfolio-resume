import React, {useState} from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import './assets/style/App.css'

function App() {
  
  const [currentPage, setCurrentPage] = useState('About');

  return (
    <div className="main">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <Content currentPage={currentPage}/>
      <Footer />
    </div>
  );
}

export default App;
