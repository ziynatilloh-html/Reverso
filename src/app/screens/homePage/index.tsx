import React from "react";
import Banner from "../../components/headers/Banner";
import { HomeNavbar } from "../../components/headers/HomeNavbar";
import Statistics from "./Statistics";
import NewProducts from "./NewProducts";
import BannerBlock from "./BannerBlock";
import AllProducts from "./PopularProducts";
import PopularProducts from "./PopularProducts";

export default function HomePage() {
  return (
    <>
      <HomeNavbar />
      <Banner />
      <Statistics/>
      <NewProducts /> 
      <BannerBlock /> 
      <PopularProducts/>
      {/* <BestSellers /> */}
      {/* <FeaturedProducts /> */}
      {/* <DiscountedProducts /> */}
      {/* <TrendingProducts /> */}
      {/* <CustomerReviews /> */}
      {/* <NewsletterSubscription /> */}
      {/* <Footer /> */}

    </>
  );
}