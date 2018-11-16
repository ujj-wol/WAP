(function () {
    "use strict";
    $(function () {
        $(".boundary").mouseover(turnRed);
        $("#end").mouseover(result);
        $("#gameArea").mouseleave(handleCheating);
        $("#start").click(reset);
    });

    let disqualified = false;
    let gameComplete = false;

    function turnRed() {
        $(".boundary").addClass('youlose');
        disqualified = true;
    }

    function result() {
        if (!disqualified)
            won();
        else lost();
    }

    function won() {
        $("#status").css("color", "green").html("You won!! :)   Click 'S' to play again");
        gameComplete = true;
    }

    function lost() {
        $("#status").html("You lose!! :(   Click 'S' to play again");
        $("#status").css({
            "color": "red",
        });
        //document.getElementById("status").innerHTML = "You Lose !!";
    }

    function reset() {
        $(".boundary").removeClass('youlose');
        disqualified = false;
        gameComplete = false;
        $("#status").html('Click the "S" to begin.').css("color", "black");
    }

    function handleCheating() {
        if (!gameComplete) {
            turnRed();
            lost();
        }

    }

})();