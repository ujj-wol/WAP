$(function () {
    $("#puppies").click(startRequest);
    $("#kitties").click(startRequest);
});

function startRequest(e) {
    var animal = "";
    if ($("puppies").checked) {
        animal = "puppy";
    } else {
        animal = "kitty";
    }

    $.ajax("http://mumstudents.org/cs472/2013-09/Sections/8/ajaxpets/ajaxpets.php", {
        "method": "get",
        "animal": animal,
        "success": displayPictures,
        "error": handleError,
        "complete": whenCompleted
    });

    $("#load").attr("src", "loading.gif").css({
        "height": "80px",
        "vertical-align": "middle"
    });

    function displayPictures(data) {
        $("#pictures").innerHTML = (data.responseText);
    }

    function handleError() {
        $("#pictures").html("Error Occurred Somewhere");
    }

    function whenCompleted() {
        $("#load").css("display", "none");
    }
}