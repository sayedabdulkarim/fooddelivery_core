import { Outlet } from "react-router-dom";
import addFontsLoadedClass from "./utils/fontFaceHelper"; // Import the helper
import { useEffect } from "react";
import Footer from "./components/footer";
import { useDispatch, useSelector } from "react-redux";
import { handleShowAlert } from "./utils/commonHelper.js";
import { useMessage } from "./hooks/useAlert.js";

const App = () => {
  const { showMessage } = useMessage();
  const dispatch = useDispatch();
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
      {/* <button
        onClick={() =>
          // handleShowAlert({ type: "success", content: " MESSAGE FOM SUCCESS" })
          handleShowAlert(dispatch, "success", "Helllo")
        }
      >
        Show Alert
      </button> */}

      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
