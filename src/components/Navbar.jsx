import { useContext } from "react";
import { FaHeart, FaSun, FaHome, FaMoon, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/Context";
function Navbar() {
  const { searchParam, setSearchParam, darkMode, setDarkMode, handleSubmit } =
    useContext(GlobalContext);
  return (
    <div
      className={`${
        darkMode ? "bg-black border-b-[1px] border-slate-400" : "bg-rose-200"
      } font-bold flex gap-4 justify-between items-center p-4 fixed top-0 right-0 left-0 h-20`}
    >
      <Link
        to={"/Food-Recipies"}
        className="text-2xl text-rose-500 font-serif font-extrabold"
      >
        FOOD RECIPES
      </Link>
      <ul className="flex gap-8">
        <form
          className="flex items-center justify-center bg-white rounded-lg px-2 text-black"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text"
            className="w-[100%] px-4 rounded-lg py-2 border-none outline-none placeholder:text-rose-300 text-rose-500"
            value={searchParam}
            onChange={(e) => {
              setSearchParam(e.target.value);
            }}
            placeholder="Search for Recipes "
          />
          <button className="w-8 h-8 rounded-full bg-rose-500  flex justify-center items-center text-white">
            <FaSearch />
          </button>
        </form>
      </ul>
      <ul className="flex justify-evenly gap-4">
        <Link to={"/"}>
          <FaHome className="bg-rose-500 text-white p-2 h-[35px] w-[35px] rounded-full hover:bg-rose-800" />
        </Link>
        <Link to={"favorites"}>
          <FaHeart className="bg-rose-500 text-white p-2 h-[35px] w-[35px] rounded-full hover:bg-rose-800" />
        </Link>
        {darkMode ? (
          <li
            className=""
            onClick={() => {
              setDarkMode(false);
            }}
          >
            <FaSun className="bg-rose-500 text-white p-2 h-[35px] w-[35px] rounded-full hover:bg-rose-800" />
          </li>
        ) : (
          <li
            className=""
            onClick={() => {
              setDarkMode(true);
            }}
          >
            <FaMoon className="bg-rose-500 text-white p-2 h-[35px] w-[35px] rounded-full hover:bg-rose-800" />
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
