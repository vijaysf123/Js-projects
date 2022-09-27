const bdy = document.querySelector('body');



let html = `<input type="number" class="guess__number-box" placeholder="Guess That Number"><button class="btn btn-submit">SUBMIT</button><button class="btn generate-num-btn">GENERATE NUMBER</button>`;

bdy.insertAdjacentHTML('afterbegin',html);

const box = bdy.querySelector(".guess__number-box");


const button = box.nextElementSibling;

const button2 = button.nextElementSibling;
	
//program

let randomNum;

button.disabled = true;


button2.addEventListener('click',(e) =>{
	randomNum = parseInt(Math.random()*10)+1;
	e.target.innerText = "NUMBER GENERATED";
	e.target.disabled = true;
	button.disabled = false;
	alert("A number is generated and its between 1 to 10 let's guess it and insert it in the below box you have only one chance to guess it right");	
});

button.addEventListener('click',(e) =>{
	if(box.value == randomNum){
		alert("Congratulations :) You Guessed It Right let's Play it again");
	}else{
		alert("Sorry :( Not Matched!!! Generate It again");
	}
	button2.innerText = "GENERATE NUMBER";
	button2.disabled = false;
	button.disabled = true;
	button2.backgroundImage = "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0))";
	box.value = "";
});
