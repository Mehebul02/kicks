"use client";

import Categories from "../components/categories/Categories";
import { HeroSection } from "../components/heroSection/HeroSection";
import Products from "../components/product/Products";
import Reviews from "../components/reviews/Reviews";


export default function Home() {

  return (
    <div >
    <HeroSection/>
    <Products/>
    <Categories/>
    <Reviews/>
    </div>
  );
}
