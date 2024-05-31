import { useContext } from "react";
import Body from "../components/Body";
import { GlobalContext } from "../context/Context";

function Homepage() {
  const { darkMode } = useContext(GlobalContext);
  return (
    <div className={`${darkMode ? "bg-slate-800" : "bg-rose-50"} h-[100vh]`}>
      <Body />
    </div>
  );
}

export default Homepage;
