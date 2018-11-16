$(function () {
    $("button").click(function () {
        let rootUrl = "http://jsonplaceholder.typicode.com/";
        let userId = $("#userId").val();
        let infoUrl = rootUrl + "users/" + userId;
        let postsUrl = rootUrl + "posts?userId=" + userId;

        $.ajax(infoUrl, {
            "type": "get",
            "success": onAjaxSuccess,
            "error": onAjaxFailure
        });
        $.ajax(postsUrl, {
            "type": "get",
            "success": onAjaxSuccessPosts,
            "error": onAjaxFailure
        });
    });
});

function onAjaxSuccess(data) {
    $("#userInfo").append($("<h2>").text("User Information:"));
    //$("section").text(JSON.stringify(data));
    $("<p>").text("Username: " + data.username)
        .appendTo($("#userInfo"));
    $("<p>").text("Email: " + data.email).appendTo("#userInfo");
    $("<p>").text("Address: " + JSON.stringify(data.address)).appendTo("#userInfo");
    $("#userInfo").css({"border":"black 1px solid", 
                        "color": "green", 
                        "padding":"10px",
                        "margin":"10px"
                    });
}

function onAjaxSuccessPosts(data) {
    $("#posts").append($("<h2>").text("Posts:"));
    for (var key in data) {
        $("<div class='" + data[key].id + "'>")
            .css("margin", "10px")
            .text(data[key].body)
            .appendTo($("#posts"));

        $("#posts").append(
            $("<button name='" + data[key].id + "'>")
            .on("click", viewComment)
            .text("View Comments")
        );

        $("#posts").append("<div id='" + data[key].id + "post'>");
    }
    $("#posts").css({"border": "solid 1px black",
                     "padding":"10px",
                     "color":"blue",
                     "margin": "10px"});
}

function viewComment() {
    $.ajax({
        url: "http://jsonplaceholder.typicode.com/comments?postId=" + this.name,
        type: "GET",
        success: showComments,
        error: onAjaxFailure
    });

}

function showComments(data) {
    for (var k in data) {
        var id = "#" + data[k].id + "post";
        var body = data[k].body;
        $("<li>")
            .text(body)
            .css({"border":"blue dashed 1px",
             "margin": "20px",
             "color":"red"})
            .appendTo(id);
    }
}

function onAjaxFailure(xhr, status, exception) {
    console.log(xhr, status, exception);
}