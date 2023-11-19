import { Outlet } from "react-router-dom";
import addFontsLoadedClass from "./utils/fontFaceHelper"; // Import the helper
import { useEffect } from "react";
import Footer from "./components/footer";

const App = () => {
  ///
  useEffect(() => {
    addFontsLoadedClass("ProximaNova");
  }, []);

  return (
    <div className="main_wrapper">
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
