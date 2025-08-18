const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");


function drawBoard(){
	x = [100, 100, 200, 200, 0, 310, 0, 310];
	y = [0, 310, 0, 310, 100, 100, 200, 200];

	for (var i = 0; i < x.length; i++){
		ctx.beginPath();
		ctx.moveTo(x[i],y[i]);
		i++;
		ctx.lineTo(x[i], y[i]);
		ctx.stroke();
	}
}

function drawX(x,y){
	ctx.beginPath();
	ctx.moveTo(x-25, y-25);
	ctx.lineTo(x+25, y+25);
	ctx.stroke();
	ctx.moveTo(x+25, y-25);
	ctx.lineTo(x-25, y+25);
	ctx.stroke();
}

drawBoard();

canvas.addEventListener('click', function(event) {
	var clickX = event.pageX - canvas.offsetLeft;
	var clickY = event.pageY - canvas.offsetTop;
	var region = getRegion(clickX, clickY)
	var [tileX, tileY] = getRegionCenter(region);
	drawX(tileX,tileY);

})

function getRegion(x, y) {
	var r = Math.floor(x/100);
	r += Math.floor(y/100) * 3;
	return r;
}

function getRegionCenter(r){
	var x = 50 + ((r % 3) * 100);
	var y = 50 + (((r - (r % 3))/3) * 100);

	return [x, y];
}
