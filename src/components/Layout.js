import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FooterWidgets from '../pages/FooterWidgets';


export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="main-content">
        {children}
      </main>
      <FooterWidgets></FooterWidgets>
      <Footer />
    </div>
  );
}
