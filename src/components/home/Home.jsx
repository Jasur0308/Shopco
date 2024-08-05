import React from 'react';
import Navbar from '../navbar/Navbar';
import Banner from '../banner/Banner';
import Brands from '../brands/Brands';
import New from '../new/New';
import Top from '../top/Top';
import Style from '../DressStyle/Style';
import Comments from '../comments/Comments';
import Footer from '../footer/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Brands />
      <New />
      <Top />
      <Style />
      <Comments />
      <Footer />
    </>
  );
}

export default Home;