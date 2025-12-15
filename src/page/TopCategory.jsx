import React, { use } from "react";
import { Link } from "react-router";

const TopCategory = ({ topPromise }) => {
  const top = use(topPromise);
  return (
    <div className="bg-[#50727B] pt-8 pb-20">
        <h1 className="px-6 py-4 text-3xl font-semibold text-gray-100">Top Rated skills</h1>
      <div className=" gap-4 grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1">
        {top.map((category) => (
          <div className="p-2">
            <div className="card  hover:shadow-lg transition bg-gradient-to-r from-[#49108B] to-[#49108B] h-full px- m-0 w-full shadow-sm ">
              <figure>
                <img
                  className="p-2 rounded-xl h-50 w-full"
                  src={category.image}
                  alt="Shoes"
                />
              </figure>

              <div className="card-body text-start pl-5 px-4">
                <h2 className=" text-start text-gray-300">
                  <span className="italic  text-gray-100 font-semibold">
                    Skill Name
                  </span>
                  : {category.skillName}
                </h2>

                <p className="text-gray-300">
                  <span className="italic  text-gray-100 font-semibold">
                    {" "}
                    Rating{" "}
                  </span>{" "}
                  : {category.rating}
                </p>
                <h2 className="text-gray-300">
                  <span className="italic text-gray-100 font-semibold">
                    Price{" "}
                  </span>
                  : {category.price}
                </h2>
                <div className="card-actions justify-center">
                  <Link
                    className="btn bg-[#27005D] border-0  w-full btn-primary"
                    to={`/category/${category.skillId}`}
                  >
                    View Detaile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategory;
