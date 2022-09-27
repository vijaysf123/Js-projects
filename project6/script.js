const btnsParent = document.querySelector(".btns");
const counterNum = document.querySelector(".number");

// event delegation used
btnsParent.addEventListener("click",(e)=> {

	if(e.target.classList.contains("increase")){
		counterNum.textContent = parseInt(counterNum.textContent) + 1;
	} else if (e.target.classList.contains("decrease")){
		counterNum.textContent = parseInt(counterNum.textContent) > 0 ? parseInt(counterNum.textContent) - 1  : 0;
	}
});