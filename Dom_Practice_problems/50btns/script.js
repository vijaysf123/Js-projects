const btnContainer = document.querySelector(".container");
// btn to insert 50 btns
const controlBtn = document.querySelector(".eg_insert_btns");
let btnHtml = "";
controlBtn.addEventListener("click",(e)=>{
  for(let i = 1;i<=50;i++){
    btnHtml += `<a href="#" onclick='alert("you clicked btn no. ${i}")' class="eg_btn">btn${i}</a>`;
  } 
  // appending to the dom   
  btnContainer.insertAdjacentHTML("beforeend",btnHtml);  
  
  //reseting the main string
  btnHtml = "";
})