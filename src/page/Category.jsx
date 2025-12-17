

import React, { use } from 'react';
import { Link } from 'react-router';

const Category = ({categoryPromise}) => {

  const categoryData = use(categoryPromise)

    return (

      <div className="px-3 py-7 bg-gradient-to-r from-fuchsia-700 via-pink-400 to-pink-300 ">
          <h1 className='px-6 text-3xl font-semibold text-gray-100'>Popular Skills</h1>
      
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-3 py-4 '>

        

        {categoryData.map((category)=>(



            
 <div className="p-2">
            <div className="card  hover:shadow-lg transition bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 h-full px- m-0 w-full shadow-sm ">
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

                <p className='text-gray-300'>
                  <span className="italic  text-gray-100 font-semibold">
                    {" "}
                    Rating{" "}
                  </span>{" "}
                  : {category.rating}
                </p>
                <h2 className='text-gray-300'>
                  <span className="italic text-gray-100 font-semibold">
                    Price{" "}
                  </span>
                  : {category.price}<i class="fa-solid fa-bangladeshi-taka-sign text-[13px]"></i>
                </h2>
                <div className="card-actions justify-center">
                  <Link
                    className="btn bg-gradient-to-r from-sky-400 to-sky-700 border-0  w-full btn-primary"
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

export default Category;