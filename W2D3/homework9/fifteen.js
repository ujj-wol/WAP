// this is not working
//$("#puzzlearea > div").addClass('puzzlepiece');
(function () {
    "use strict";

    // Puzzle Module to handle all the required events to play pulle game
    var PuzzleModule = (function () {
        var EMPTY_POSITION = {
            left: '300px',
            top: '300px'
        };
        var SUFFLED = 0;

        // Init puzzle pieces
        var init = function () {
            $("#puzzlearea div").each(function (i, e) {
                var x = ((i % 4) * 100);
                var y = (Math.floor(i / 4) * 100);

                $(this).addClass("puzzlepiece");
                $(this).css({
                    "left": x + 'px',
                    "top": y + 'px',
                    "backgroundImage": 'url("background.jpg")',
                    "backgroundPosition": -x + 'px ' + (-y) + 'px'
                });
            })
        }

        // move puzzlepiece if movable
        var movePuzzlePiece = function (e) {
            if (isMovable(this)) {
                var currentLeft = $(this).css('left'),
                    currentTop = $(this).css('top');

                var puzzleValue = $(this).css({
                    'left': EMPTY_POSITION.left,
                    'top': EMPTY_POSITION.top
                });

                EMPTY_POSITION.left = currentLeft;
                EMPTY_POSITION.top = currentTop;

                checkIfComplete();
            }
        }

        // add movablepiece class 
        var addClassToPuzzlepiece = function (e) {
            var that = this;
            if (isMovable(that)) {
                $(this).addClass('movablepiece');
            }
        }

        // remove movable class
        var removeClassFromPuzzlepiece = function () {
            $(this).removeClass('movablepiece');
        }

        // suffle puzzle pieces
        var sufflePuzzlepiece = function () {
            var randomNumArray = [];
            SUFFLED = 1;
            clearMessage();
            $("#puzzlearea div").each(function (i, e) {
                var randomNum = parseInt(Math.random() * 15);
                while ($.inArray(randomNum, randomNumArray) > -1) {
                    randomNum = parseInt(Math.random() * 15);
                }

                randomNumArray.push(randomNum);
                var x = ((randomNum % 4) * 100);
                var y = (Math.floor(randomNum / 4) * 100);

                $(this).css({
                    "left": x + 'px',
                    "top": y + 'px',
                });
            });
        }

        // check if puzzle piece is movable
        var isMovable = function (that) {
            var currentLeft = $(that).css('left'),
                currentTop = $(that).css('top');
            if (isHorizontallyMovable(currentLeft, currentTop)) {
                return true;
            }
            if (isVerticallyMovable(currentLeft, currentTop)) {
                return true;
            }
        }

        // check if puzzle piece is movable horizontally
        var isHorizontallyMovable = function (currentLeft, currentTop) {
            if ((parseInt(currentLeft) == parseInt(EMPTY_POSITION.left)) && (parseInt(currentTop) + 100 == parseInt(EMPTY_POSITION.top))) {
                return true;
            }
            if (parseInt(currentLeft) == parseInt(EMPTY_POSITION.left) && (parseInt(currentTop) - 100 == parseInt(EMPTY_POSITION.top))) {
                return true;
            }

            return false;
        }

        // check if puzzle piece is movable vertically
        var isVerticallyMovable = function (currentLeft, currentTop) {
            if ((parseInt(currentLeft) + 100 == parseInt(EMPTY_POSITION.left)) && (parseInt(currentTop) == parseInt(EMPTY_POSITION.top))) {
                return true;
            }
            if (parseInt(currentLeft) - 100 == parseInt(EMPTY_POSITION.left) && (parseInt(currentTop) == parseInt(EMPTY_POSITION.top))) {
                return true;
            }

            return false;
        }

        // check if puzzle game is complete
        var checkIfComplete = function () {
            if (SUFFLED) {
                if (parseInt(EMPTY_POSITION.left) == 300 && parseInt(EMPTY_POSITION.top) == 300) {
                    $("#message").text("Congratulations, you won!");
                }
            }

            return false;
        }

        // clear message text
        var clearMessage = function () {
            $("#message").text("");
        }

        return {
            init: init,
            movePuzzlePiece: movePuzzlePiece,
            addClassToPuzzlepiece: addClassToPuzzlepiece,
            removeClassFromPuzzlepiece: removeClassFromPuzzlepiece,
            sufflePuzzlepiece: sufflePuzzlepiece,
        };
    })();

    $(document).ready(function () {
        PuzzleModule.init();
        $(".puzzlepiece").on("click", PuzzleModule.movePuzzlePiece);
        $(".puzzlepiece").hover(PuzzleModule.addClassToPuzzlepiece, PuzzleModule.removeClassFromPuzzlepiece);
        $("#shufflebutton").on("click", PuzzleModule.sufflePuzzlepiece);
    });
})();