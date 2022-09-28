const para = document.querySelector("p");
const btn = document.querySelector("button");

// storing initial paragraph content for futher
const temp = para.textContent;

function highLightOver8Chars(target){
	const output = temp.split(' ').map((wrd) => {
  		if(wrd.length > 7){
    		return `<span style="background-color:yellow;color:black;">${wrd}</span>`;
  		} else if (wrd.length < 7){
    		return wrd;
  		}
	}).join(" ");


	// if status not highlighted
	if(!para.classList.contains("highlighted")){
		// update highlighted chars to dom
		para.innerHTML = output;
		
		// update btn text
		target.textContent = "Back To Normal";
		
		// adding class to para for highlight status
		para.classList.add("highlighted");		
	} else if(para.classList.contains("highlighted")) {
		// back to normal paragraph
		para.innerHTML = temp;

		// update btn text
		target.textContent = "Highlight";
		
		// remove the highlight status class
		para.classList.remove("highlighted");		
	}
	
}

btn.addEventListener("click",(e)=>{
	highLightOver8Chars(e.target);
});
