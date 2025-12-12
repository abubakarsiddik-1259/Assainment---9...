import React, { Suspense } from "react";
import Bannar from "./Bannar";
import Category from "./Category";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

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



    </div>
  );
};

export default HomePage;
