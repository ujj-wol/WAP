$(function () {
    //create variable for loading image
    const loadingimage = $("<img>").attr({
        "id": "loadimage",
        "src": "loading.gif",
        "alt": "Loading..."
    });
    $("#boot").append(loadingimage);
    $("#loadimage").hide();

    let bootimage = $("<img>").attr(
        "id", "bootimage");
    $("#boot").append(bootimage);
    $("#bootimage").hide();

    $("#load").click(start);
});

function start() {

    //clear previous bootimage if there was showing
    $("#bootimage").css("display", "none");

    $.ajax("http://mumstudents.org/cs472/2018-11-RS/Sections/8/bootloader/loader.php", {
            "type": "GET"
        })
        .done(whenSuccess)
        .fail(whenFail)
        .always(function () {
            $("#loadimage").hide(); //css("display", "none"); instead of the .hide()
        });

    $("#loadimage").show();
}

function whenSuccess(data) {
    $("#bootimage").attr({
        "id": "bootimage",
        "src": data
    }).show();

}

function whenFail(xhr, status, exception) {
    console.log(xhr, status, exception);
}