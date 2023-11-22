import { Outlet } from "react-router-dom";
import addFontsLoadedClass from "./utils/fontFaceHelper"; // Import the helper
import { useEffect } from "react";
import Footer from "./components/footer";
import { useSelector } from "react-redux";
import { useMessage } from "./hooks/useAlert.js";

const App = () => {
  const { showMessage } = useMessage();
  const { isAlert, type, content } = useSelector((state) => state.alertReducer);

  //async
  useEffect(() => {
    addFontsLoadedClass("ProximaNova");
  }, []);

  useEffect(() => {
    if (isAlert) {
      showMessage(type, content);
    }
  }, [isAlert, content, type, showMessage]);

  return (
    <div className="main_wrapper">
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
