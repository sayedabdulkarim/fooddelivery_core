import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="main_wrapper">
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
