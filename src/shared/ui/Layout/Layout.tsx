import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Seo } from '../Seo/Seo';
import '../../styles/variables.css';
import '../../styles/global.css';

const Layout = ({ children }) => (
  <>
    <Seo />
    <Navigation />

    <main className="bg-gray h-screen">{children}</main>
  </>
);

export { Layout };
