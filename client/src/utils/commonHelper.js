//for setting attribute in the body,for customising ui as per the selected theme
const toggleTheme = (color) => {
  document.querySelector("body").setAttribute("data-theme", color);
};

export { toggleTheme };
