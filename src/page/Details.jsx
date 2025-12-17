import React, { use, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { toast } from "react-toastify";
const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Details = () => {
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");

  const { skillId } = useParams();
  const categoryData = use(categoryPromise);
  const data = categoryData;
  console.log(skillId, data);

  const [categoryCart, setCategoryCart] = useState([]);

  useEffect(() => {
    const filteredCard = data.filter((cards) => cards.skillId == skillId);

    console.log(filteredCard);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCategoryCart(filteredCard);
  }, [data, skillId]);

  //////// book section ///////

  const hendleSubmite = (e) => {
    e.preventDefault();
    setEmail("");
    setName("");
    toast.success("successfull book session");
  };

  return (
    <div className="mx-auto">
      <div className="h-auto bg-gradient-to-r from-purple-400 via-indigo-500 to-purple-600 ">
        <div className="">
          {categoryCart.map((cards) => (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className="col-span-1 py-10 px-2 ">
                <figure>
                  <img
                    className="w-full h-[320px]  object-cover rounded-xl"
                    src={cards.image}
                    alt="Shoes"
                  />
                </figure>
              </div>

              <div className="card-body col-span-1 text-white/60">
                <h2 className="card-title">
                  {" "}
                  <span className="text-white">Name : </span>
                  {cards.skillName}{" "}
                </h2>

                <h2 className="card-title ">
                  {" "}
                  <span className="text-white">Category :</span>
                  {cards.category}
                </h2>

                <h2 className="card-title">
                  <span className="text-white">Provider Name :</span>{" "}
                  {cards.providerName}{" "}
                </h2>

                <h2 className="card-title">
                  <span className="text-white"> Provide Email :</span>{" "}
                  {cards.providerEmail}{" "}
                </h2>

                <h2 className="card-title">
                  <span className="text-white">Rating :</span> {cards.rating}{" "}
                </h2>
                <h2 className="card-title">
                  <span className="text-white">Price :</span>
                  {cards.price}
                  <i class="fa-solid fa-bangladeshi-taka-sign text-[13px]"></i>{" "}
                </h2>

                <h2 className="card-title">
                  <span className="text-white"> Slots Available :</span>{" "}
                  {cards.slotsAvailable}{" "}
                </h2>

                <h2 className="font-bold text-justify">
                  <span className="text-white ">Description :</span>{" "}
                  {cards.description}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link
            className="btn text-white mx-auto bg-gradient-to-r
 from-green-600 to-pink-600 border-0 px-22 btn-primary"
            to="/"
          >
            Home
          </Link>
        </div>
        <br />
      </div>
      {/* /////////////////////////////  */}
      <div className="bg-gradient-to-r from-rose-400 via-teal-500 to-lime-500 animate__backInLeft  lg:px-44 py-22">
        <h1 className="text-center pb-10 text-4xl font-semibold text-pink-500 ">
          Book Session Form
        </h1>
        <div className="card bg-purple-500 w-full max-w-sm  mx-auto shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={hendleSubmite}>
              <fieldset className="fieldset">
                <label className="label text-gray-100">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <label className="label text-gray-100">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
