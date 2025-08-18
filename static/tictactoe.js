const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
var counter = 0;
var game_state = {
	board: [0, 0, 0, 0, 0, 0, 0, 0, 0]
}

function drawBoard(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);	
	var x = [100, 100, 200, 200, 0, 310, 0, 310];
	var y = [0, 310, 0, 310, 100, 100, 200, 200];
	var tileX, tileY;
	for (var i = 0; i < x.length; i++){
		ctx.beginPath();
		ctx.moveTo(x[i],y[i]);
		i++;
		ctx.lineTo(x[i], y[i]);
		ctx.stroke();
	}

	for (var j=0; j < game_state.board.length; j++){
		
		[tileX, tileY] = getRegionCenter(j);
		
		if (game_state.board[j] == 0) {
			continue;
		}

		if (game_state.board[j] == 1) {
			drawX(tileX, tileY);
		} else if (game_state.board[j] == 2) {
			drawO(tileX, tileY);
		}
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

function drawO(x,y) {
	ctx.beginPath();
	ctx.arc(x, y, 25, 0, 2*Math.PI);
	ctx.stroke()
}


canvas.addEventListener('click', function(event) {
	var clickX = event.pageX - canvas.offsetLeft;
	var clickY = event.pageY - canvas.offsetTop;
	var region = getRegion(clickX, clickY)
	var [tileX, tileY] = getRegionCenter(region);
	if (counter % 2 == 0) {
		if (game_state.board[region] == 0) {
			game_state.board[region] = 1
			counter++;
		}
	} else {
		if (game_state.board[region] == 0) {
			game_state.board[region] = 2
			counter++;
		}
	}
	drawBoard();

});

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

drawBoard();
