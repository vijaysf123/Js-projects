// highlight the bold text on mouseover
const boldTxts = document.querySelectorAll("b");

// loop to get indivisual bold text element
boldTxts.forEach((boldTxt)=>{
  // mouseover event to change background color(highlighting text)
  boldTxt.addEventListener("mouseover",(e)=>{
    e.target.style.backgroundColor = "yellow";
  });
  
  // change background color back to normal on mouseleave
  boldTxt.addEventListener("mouseleave",(e)=>{
    e.target.style.backgroundColor = "initial";
  });
  
})