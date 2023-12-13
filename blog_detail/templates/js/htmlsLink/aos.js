const scriptTag = document.createElement("script");
scriptTag.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";

const body = document.querySelector("body");

const addScriptToBody = (scriptElement) => {
  body.appendChild(scriptElement);
};

const link =
  '<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">';
const header = document.querySelector("head");

const appendToHeader = (htmlString) => {
  header.insertAdjacentHTML("beforeend", htmlString);
};

appendToHeader(link);


addScriptToBody(scriptTag);
