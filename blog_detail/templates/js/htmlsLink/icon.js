const scriptTag = document.createElement("script");
scriptTag.src =
  "https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js";

const body = document.querySelector("body");

const addScriptToBody = (scriptElement) => {
  body.appendChild(scriptElement);
};

addScriptToBody(scriptTag);

console.log(body);
