import { useContext } from "react";
import { GlobalContext } from "../context/Context";
import { Link } from "react-router-dom";

function Body() {
  const { darkMode, recipies, loading } = useContext(GlobalContext);
  if (loading) {
    return <h1>Loading.......</h1>;
  }
  if (recipies.length === 0) {
    return (
      <h1 className="text-rose-400 font-bold text-3xl mx-auto items-center flex justify-center mt-20">
        <p className=" mt-32 font-extrabold">Search to find the results</p>
      </h1>
    );
  }
  return (
    <div className={`${darkMode ? "bg-slate-800" : "bg-rose-50"} p-10 mt-20`}>
      <div className="flex flex-wrap gap-8 overflow-hidden justify-center items-center">
        {recipies.length > 0 &&
          recipies.map((item, index) => (
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
  );
}

export default Body;
