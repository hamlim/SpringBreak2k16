$(document).ready(function(){
    var stage, output;

    function init() {
    	stage = new createjs.Stage("demoCanvas");
    	let canvas = document.getElementById('demoCanvas');
    	canvas.width = canvas.scrollWidth;
    	canvas.height = canvas.scrollHeight;
    	// this lets our drag continue to track the mouse even when it leaves the canvas:
    	// play with commenting this out to see the difference.
    	stage.mouseMoveOutside = true;

    	var circle = new createjs.Shape();
    	circle.graphics.beginFill("#000").drawCircle(0, 0, 10);
    	//rgba(255, 255, 255, 0.5)


    	// var label = new createjs.Text("drag me", "bold 14px Arial", "#FFFFFF");
    	// label.textAlign = "center";
    	// label.y = -7;
    	var board = new createjs.Container();
        board.x = board.y = 130;
    	// board.graphics.setStrokeStyle(10, "round")
    	// 			  .beginStroke("rgba(255, 255, 255, 0.5)")
    	// 			  .beginFill("#85144b")
    	// 	          .drawRoundRect(130, 130, 400, 400, 10);
    	let squares = [2,2];
    	let numofsquares = squares[0];
    	let sqhw = 400 / numofsquares;
    	for (var i=0; i<squares[0]; i++){ //X
    		for(var j=0; j<squares[1]; j++){ //Y
    			var square = new createjs.Shape();
    			square.graphics.setStrokeStyle(15, "round")
    					   	   .beginStroke("rgba(255, 255, 255, 0.5)")
    					       .beginFill("#85144b")
    					       .drawRoundRect(i*sqhw, j*sqhw, sqhw, sqhw, 10);
    			board.addChild(square);
    		}
    	}

    	stage.addChild(board);

    	var dragger = new createjs.Container();
    	dragger.x = dragger.y = 100;
    	dragger.addChild(circle);
    	stage.addChild(dragger);

    	dragger.on("pressmove", function(evt) {
    		// currentTarget will be the container that the event listener was added to:
    		evt.currentTarget.x = evt.stageX;
    		evt.currentTarget.y = evt.stageY;
    		// make sure to redraw the stage to show the change:
    		stage.update();
    	});

    	stage.update();
    }

    init();

});
