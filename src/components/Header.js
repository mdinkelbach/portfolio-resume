import React from 'react';
import Nav from "./Nav";

function Header({currentPage, setCurrentPage}) {
  return (
    <header className="header">
      <h1>Mdinkelbach</h1>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </header>
  );
}

export default Header;
