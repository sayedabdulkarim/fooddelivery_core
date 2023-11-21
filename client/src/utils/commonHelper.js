import { setAlert, resetAlert } from "../slices/alertSlice";
//for setting attribute in the body,for customising ui as per the selected theme
const toggleTheme = (color) => {
  document.querySelector("body").setAttribute("data-theme", color);
};

const handleShowAlert = (dispatch, type, content, timeout = 2000) => {
  dispatch(setAlert({ type, content }));
  setTimeout(() => {
    dispatch(resetAlert());
  }, timeout);
};

export { toggleTheme, handleShowAlert };

// handleShowAlert(dispatch, "success", " MESSAGE FOM SUCCESS");
