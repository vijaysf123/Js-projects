const bdy = document.querySelector('body');
const clrChngBtn = bdy.querySelector('.bg__change-btn');

// colors list
let clrs = ['red','green','pink','blue','black','orange','skyblue'];


// on change background color btn click
clrChngBtn.addEventListener('click',(e) =>{
	// getting a random color from the list
	let clr = clrs[parseInt(Math.random()*clrs.length)]
	
	// changing to body
	bdy.style.backgroundColor = clr;
});

