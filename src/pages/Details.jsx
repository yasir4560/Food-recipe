import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/Context";
import { FaHeart } from "react-icons/fa";
function Details() {
  const {
    darkMode,
    recipyDetailsData,
    setRecipyDetailsData,
    handleAddToFavorite,
  } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  console.log(recipyDetailsData);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const { data } = await res.json();
        setRecipyDetailsData(data);
        console.log(recipyDetailsData.recipie);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading.........</div>
      ) : (
        <div
          className={`${
            darkMode ? "bg-black " : "bg-rose-50 "
          } flex justify-center  mt-10 p-20 `}
        >
          <div className="mr-16 flex justify-start items-start">
            <img
              className="w-[400px] h-[400px]"
              src={recipyDetailsData?.recipe?.image_url}
              alt=""
            />
          </div>
          <div className="flex flex-col w-1/2">
            <div className="flex justify-between items-center mb-5">
              <h1 className="text-black text-xl font-extrabold">
                {recipyDetailsData?.recipe?.title}
              </h1>
              <button
                onClick={() => handleAddToFavorite(recipyDetailsData?.recipe)}
                className="text-white gap-2 flex items-center justify-between bg-black  rounded-full font-bold hover:bg-[#d12e58] p-3"
              >
                <p className="text-sm">Save as Favorite</p>
                <FaHeart className="" />
              </button>
            </div>
            <div className=" mt-5 text-[#000]">
              <p className="text-2xl font-sans font-bold mb-5 text-rose-500">
                Ingredients needed are
              </p>
              <ul className="flex flex-col gap-2">
                {recipyDetailsData?.recipe?.ingredients.map((item, index) => (
                  <li key={index} className="text-lg">
                    {index + 1} ) {item.quantity} {item.unit} {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
