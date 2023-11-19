import { Outlet } from "react-router-dom";
import addFontsLoadedClass from "./utils/commonHelper"; // Import the helper
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Call the helper function and get back the cleanup function
    const cleanup = addFontsLoadedClass();

    // Cleanup function will be called when the component is unmounted
    return cleanup;
  }, []);

  return (
    <div className="main_wrapper">
      <Outlet />
    </div>
  );
};

export default App;
