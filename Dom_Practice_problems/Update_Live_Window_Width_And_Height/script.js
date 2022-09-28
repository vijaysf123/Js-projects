const body = document.querySelector("body");

const width = document.createElement("span");
const height = document.createElement("span");

width.append(body.getBoundingClientRect().width);
height.append(body.getBoundingClientRect().height);

body.children[0].insertAdjacentElement("beforeend",height);  
body.children[1].insertAdjacentElement("beforeend",width);


window.addEventListener("resize",(e)=>{
  body.children[0].querySelector('span').textContent = body.getBoundingClientRect().height;  
  body.children[1].querySelector('span').textContent = body.getBoundingClientRect().width;  
});
