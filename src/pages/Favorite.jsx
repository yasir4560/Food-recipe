import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/Context";

function Favorite() {
  const { favoritesData, darkMode } = useContext(GlobalContext);

  return (
    <div className="mt-20 h-[100vh]">
      {favoritesData.length < 0 ? (
        <div>
          <h1>No Favorites</h1>
        </div>
      ) : (
        <div
          className={`${darkMode ? "bg-slate-800" : "bg-rose-50"} p-10 mt-20`}
        >
          <h1 className="text-4xl text-rose-500 text-center font-extrabold mb-5">
            Your favorite dishes
          </h1>
          <div className="flex flex-wrap gap-8 overflow-hidden justify-center items-center">
            {favoritesData.length > 0 &&
              favoritesData.map((item, index) => (
                <div
                  className="w-80 h-80 flex flex-col items-start justify-start bg-white p-5 rounded-lg shadow-xl gap-5"
                  key={index}
                >
                  <div className="h-40 items-center flex overflow-hidden rounded-lg justify-center">
                    <img src={item.image_url} className="w-full block" alt="" />
                  </div>
                  <div className="flex justify-start flex-col items-start gap-1 mt-5">
                    <p className="text-rose-400">{item.publisher}</p>
                    <h1>{item.title}</h1>
                    <Link
                      to={`/recipy-item/${item.id}`}
                      className="bg-rose-500 rounded-md text-white font-bold p-1 mt-2 uppercase"
                    >
                      Recipe Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Favorite;
