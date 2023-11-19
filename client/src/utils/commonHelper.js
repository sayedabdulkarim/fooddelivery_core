//for setting attribute in the body,for customising ui as per the selected theme
const toggleTheme = (color) => {
  document.querySelector("body").setAttribute("data-theme", color);
};

// fontHelper
const addFontsLoadedClass = (timeout = 3000) => {
  // Simulate font loading with a timeout
  const fontLoadTimeout = setTimeout(() => {
    document.documentElement.classList.add("fonts-loaded");
  }, timeout);

  return () => clearTimeout(fontLoadTimeout);
};

export default addFontsLoadedClass;

export { toggleTheme };
