$(document).ready(function(){
    // App.js
    // Spring Break 2k16
    // Matt Hamlin

    /*
        So we have a Board object/class
            dimensions: (array)[height, width] of the Board
            entrance: (array)[column, row] location of the entrance
            exit: (array)[column, row] location of the exit
            type: (string) describing the type of the Board
                dot_in_path
                shape
                shadow
                symmetry
                sound
                gamma
                pair_the_stars
                black_and_white_squares
                colored_squares
            bg_color: (hex value string (w/ `#`)) the color of the background of the board
            solution_parameters: (object) a set of rules that the user's solution must meet
                Example (their line hits specific points, their line encompases a shape etc)


    */
    class Board {
        constructor(dimensions, entrance, exit, type, bg_color, solution_parameters) {
            this.dimensions = dimensions;
            this.entrance = entrance;
            this.exit = exit;
            this.type = type;
            this.bg_color = bg_color;
            this.solution_parameters = solution_parameters;
            // renderBoard(); // May not need to be called here (not sure if that will work)
        }

        renderBoard(canvasElement){
            //this will render the board on the canvas on the page

        }

        checkSolution(external_solution){
            if(this.type === 'dot_in_path'){
                //solution_parameters, and external_solution are objects
                // they can have parameters / values / keys of:
                /*
                    points - A solution to the problem (for external_solution this is the user input)
                        For solution_parameters this is an example solution to the problem (by me)
                    key_points - A subset of the points in points, made up of key points that the external_solution
                        needs to have in order to successfully beat the puzzel
                */
                /*
                    {
                        points: [
                            [1,1],
                            [1,2],
                            [2,2],
                            etc....
                        ],
                        key_points: [
                            [2,4] (note this is only one point but key_points can have several points)
                        ]
                    }
                */
                let userpoints = external_solution.points;
                let numchecks = this.solution_parameters.key_points.length;
                let checked = 0;
                for(let k=0; k<userpoints.length; k++){
                    for(let j=0; j<numchecks; j++){
                        if(userpoints[k] === this.solution_parameters.key_points[j]){
                            //it hits one of the key points
                            checked += 1;
                        }
                    }
                }
                if(checked === numchecks){
                    /*
                        user solution hit all the key points
                        which means that the solution is correct
                    */
                }
            } else if (this.type === 'shape'){

            } else if (this.type === 'shadow'){

            } else if (this.type === 'symmetry'){

            } else if (this.type === 'sound'){

            } else if (this.type === 'gamma'){

            } else if (this.type === 'pair_the_stars'){

            } else if (this.type === 'black_and_white_squares'){

            } else {
                //colored_squares

            }
        }
    }
    let params = {
        // points: [
        //     [1,1],
        //     [1, 2],
        //     [2, 2],
        //     [2,3],
        //     [2,4]
        // ],
        key_points: [
            [2,3]
        ]
    };

    let testBoard = new Board([4,4], [1,1], [2,4], 'dot_in_path', '#85144b', params);
    console.log(testBoard);

    let stage, shape, oldX, oldY, size, color, canvas;
    function init(){
        //init stage for EaselJS
        stage = new createjs.Stage("js-canvas");
        stage.enableDOMEvents(true);

        //canvas size/scale fix
        canvas = document.getElementById('js-canvas');
        canvas.width = canvas.scrollWidth;
        canvas.height = canvas.scrollHeight;

        size = 0;
        color = "#DDDDDD";

        stage.on("stagemousedown", function(event) {
			size = 4;
		});

        stage.on("stagemousemove",function(evt) {
    		if (oldX) {
    			shape.graphics.beginStroke(color)
    						  .setStrokeStyle(size, "round")
    						  .moveTo(oldX, oldY)
    						  .lineTo(evt.stageX, evt.stageY);
    			stage.update();
    		}
			oldX = evt.stageX;
			oldY = evt.stageY;
		});

		stage.update();

        // stage.on("stagemousedown", function(evt) {
        //     alert("the canvas was clicked at "+evt.stageX+","+evt.stageY);
        // });
        // stage.addEventListener('mousedown', mousedown, false);
        //
        // // Testing code
        // var circle = new createjs.Shape();
        // circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
        // circle.x = 100;
        // circle.y = 100;
        // stage.addChild(circle);
        // console.log(stage);
        // stage.update();
    }
    init();

});
