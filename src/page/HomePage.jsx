import React, { Suspense } from "react";
import Bannar from "./Bannar";
import Category from "./Category";
import TopCategory from './TopCategory';
import HowToWork from "./HowToWork";
import OfferCart from "./OfferCard";

const categoryPromise = fetch("/categories.json").then((res) => res.json());
const topPromise = fetch("/top.json").then((res) => res.json());

const HomePage = () => {
  return (
    <div>
      <Bannar></Bannar>

   {/* .. category Section ...  */}
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <Category categoryPromise={categoryPromise}></Category>
      </Suspense>

      {/* ...... Top 5 Rating ...... */}
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <TopCategory topPromise={topPromise}></TopCategory>
      </Suspense>
      

      <HowToWork></HowToWork>
    <OfferCart></OfferCart>


    </div>
  );
};

export default HomePage;
