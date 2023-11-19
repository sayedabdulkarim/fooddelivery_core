import { Outlet } from "react-router-dom";
import addFontsLoadedClass from "./utils/fontFaceHelper"; // Import the helper
import { useEffect } from "react";

const App = () => {
  ///
  useEffect(() => {
    addFontsLoadedClass("ProximaNova");
  }, []);

  return (
    <div className="main_wrapper">
      <Outlet />
    </div>
  );
};

export default App;
