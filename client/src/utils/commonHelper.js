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

const scrollTo = (params) => {
  const { element, to, duration, scrollDirection } = params;

  var start = element[scrollDirection];
  var change = to - start;
  var increment = 1000 / 60;

  var anmiateScroll = (elapsedTime) => {
    elapsedTime += increment;
    var position = easeInOut(elapsedTime, start, change, duration);
    element[scrollDirection] = position;

    if (elapsedTime < duration) {
      window.requestAnimationFrame(anmiateScroll.bind(null, elapsedTime));
    }
  };

  window.requestAnimationFrame(anmiateScroll.bind(null, 0));
};

const easeInOut = (currentTime, start, change, duration) => {
  currentTime /= duration / 2;

  if (currentTime < 1) {
    return (change / 2) * currentTime * currentTime + start;
  }
  currentTime -= 1;
  return (-change / 2) * (currentTime * (currentTime - 2) - 1) + start;
};

export { toggleTheme, handleShowAlert, scrollTo };
