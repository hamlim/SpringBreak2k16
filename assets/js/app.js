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
                            [2,4]
                        ]
                    }
                */

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

    let testBoard = new Board([4,4], [1,1], [2,3])
});
