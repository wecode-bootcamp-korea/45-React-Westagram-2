import React from 'react';
import Nav from '../Nav/Nav';
import LeftArticle from '../LeftArticle/LeftArticle';
import RightSection from '../RightSection/RightSection';
import './Main.scss';

const MainHeeyeon = () => {
  return (
    <div className="full-page-cover">
      <header className="header">
        <Nav />
      </header>
      <div className="main-contents-container">
        <LeftArticle />
        <RightSection />
      </div>
    </div>
  );
};
export default MainHeeyeon;
