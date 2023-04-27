import React from 'react';
import { Link } from 'react-router-dom';
import ASIDE_DATA from './asideData';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      {ASIDE_DATA.map(({ id, src, classnamed, title }) => (
        <Link key={id} to={src} className={classnamed}>
          {title}
        </Link>
      ))}
    </>
  );
};

export default Footer;
