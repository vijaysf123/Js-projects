const para = document.querySelector("p");

const output = para.textContent.split(' ').map((wrd) => {
  if(wrd.length > 7){
    return `<span style="background-color:yellow;color:black;">${wrd}</span>`;
  } else if (wrd.length < 7){
    return wrd;
  }
}).join(" ");
// console.log(output);
para.innerHTML = output;