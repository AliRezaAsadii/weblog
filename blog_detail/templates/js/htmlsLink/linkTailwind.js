const link = '<link rel="stylesheet" href="../dist/output.css">';
const header = document.querySelector("head");

const appendToHeader = (htmlString) => {
  header.insertAdjacentHTML("beforeend", htmlString);
};

appendToHeader(link);

console.log(header);
