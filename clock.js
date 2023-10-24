// var seconds = 0;
// var hours = 0;
// var minutes = 0;
// var d = new Date();

setInterval
    (
	function()
	    {
		let d = new Date();
        	let seconds = d.getSeconds() * 6;
        	let minutes =  d.getMinutes() * 6 ;
		let hours  =  d.getHours() * 30 + Math.round(minutes / 12);
		document.getElementById("second-hand").style.transform="rotate("+ seconds +"deg)";
		document.getElementById("miniute-hand").style.transform="rotate("+ minutes +"deg)";
		document.getElementById("hour-hand").style.transform="rotate("+ hours +"deg)";
	    }, 1000
    );

