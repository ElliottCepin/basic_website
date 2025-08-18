const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
	
x = [100, 100, 200, 200, 0, 310, 0, 310];
y = [0, 310, 0, 310, 100, 100, 200, 200];

for (let i = 0; i < x.length; i++){
	ctx.beginPath();
	ctx.moveTo(x[i],y[i]);
	i++;
	ctx.lineTo(x[i], y[i]);
	ctx.stroke();
}
	
