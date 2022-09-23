
const clock = document.querySelector('.container > .clock');
const hoursLine = clock.children[1];
const minutesLine = clock.children[2];
const secondsLine = clock.children[3];

// how engine works

/* logic for ratation
	for second 1sec = 6*
	for minutes:
		after every 1 minute rotate by 6*
	for hours:
		logic is simple just check minutes past are what persentage of 60 and 
		add this value to hour 	and rotate by 30*
*/


// get current hour minute and second
const date = new Date();

const time = {
	h:date.getHours() > 12 ? date.getHours() - 12: date.getHours(),
	m:date.getMinutes(),
	s:date.getSeconds()
}



// engine
setInterval((e)=>{		
	secondsLine.style.rotate = `${time.s*6}deg`;
	minutesLine.style.rotate = `${time.m*6}deg`;

	// how much time past exactly
	/* logic is simple just check minutes past are what persentage of 60 and 
	add this value to hour */
	hoursLine.style.rotate = `${(time.h + (time.m / 60))*30}deg`;

	// updting seconds and minutes
	if(time.s < 59){
		time.s +=1;
	} else {
		time.s = 0;
		if(time.m < 59){
			time.m += 1;

		} else {
			time.m = 0;
		}
	}
},996);
