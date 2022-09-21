const bdy = document.querySelector('body');
const clrChngBtn = bdy.querySelector('.bg__change-btn');

// numbers list
let nums = [0,1,2,3,4,5,6,7,8,9];


// on change background color btn click
clrChngBtn.addEventListener('click',(e) =>{
	// getting a random color from the list
	let hexSymb = '#';

	let hexNum = '';
	
	for(let i = 1;i<=6;i++){
		hexNum += nums[parseInt(Math.random()*nums.length)];
	}
	
	let hex = hexSymb + hexNum;

	bdy.style.backgroundColor = hex;

	clrChngBtn.firstElementChild.innerText = ` CURRENT HEX CODE ${hex} `;

});

