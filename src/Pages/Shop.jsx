import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollectios";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

// import ShopContextProvider from "../Context/ShopContext";

const Shop = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </>
  );
};

export default Shop;
