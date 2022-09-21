const bdy = document.querySelector('body');

bdy.style.cssText = `
					background:#111111;
					display:flex;
					justify-content:center;
					align-items:center;
					height:100vh;
					flex-direction:column;`

let html = `<input type="text" class="guess__number-box" placeholder="Guess That Number"><button>SUBMIT</button><button class="generate-num">GENERATE NUMBER</button>`;

bdy.insertAdjacentHTML('afterbegin',html);

const box = bdy.querySelector(".guess__number-box");

box.style.cssText = `
					border:none;
					outline:none;
					color:white;
					background:transparent;
					border-bottom:1px solid yellow;
					padding:10px;
					font-size:16px;
					`;
const button = box.nextElementSibling;

const button2 = button.nextElementSibling;



button.style.cssText = button2.style.cssText = `
					   border:none;
					   padding:10px;
					   margin-top:5px;
					   color:white;
					   background:#536dfe;
					   border-radius:3px;
					   font-weight:bolder;
					   font-family:monospace;
					   font-size:16px;
					   letter-spacing:2px;
					   `;

button2.style.backgroundColor = 'Green';

button.style.width = button2.style.width = box.style.width = "300px"

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
})
