/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [added, setAdded] = useState(false);
  const [searchParam, setSearchParam] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [recipies, setRecipies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipyDetailsData, setRecipyDetailsData] = useState([]);
  const [favoritesData, setFavoritesData] = useState([]);
  function handleAddToFavorite(Item) {
    let cpyData = [...favoritesData];
    let idx = cpyData.findIndex((item) => {
      item.id === Item.id;
    });
    console.log(idx);
    if (idx === -1) {
      cpyData.push(Item);
      setAdded(true);
      setFavoritesData(cpyData);
    } else {
      cpyData.splice(idx);
      setAdded(false);
      setFavoritesData(cpyData);
    }
    console.log(favoritesData, "FavoritesData");
  }
  async function handleSubmit(event) {
    event.preventDefault();
    fetchData();
  }
  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const { data } = await response.json();
      if (data?.recipes?.length > 0) {
        setRecipies(data.recipes);
      }
      console.log(recipies);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        added,
        setSearchParam,
        darkMode,
        handleAddToFavorite,
        recipyDetailsData,
        setRecipyDetailsData,
        setDarkMode,
        handleSubmit,
        fetchData,
        recipies,
        favoritesData,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
