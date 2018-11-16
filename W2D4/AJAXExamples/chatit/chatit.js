$(function() {
    $('#send').click(send);
    checkMessages();
    setInterval(checkMessages, 2000);

    $.ajaxSetup({
        "error": ajaxFailure
    });
});

function checkMessages() {
    $.get('http://mumstudents.org/cs472/2018-11-RS/Sections/8/chatit/chatit.php', {
        
        'reverse': true
    })
        .done(gotMessages);
}

function send() {
    $.post('http://mumstudents.org/cs472/2018-11-RS/Sections/8/chatit/chatit.php', {
        'msg': $('#message').val()
    })
        .done(sentMessage);
}

function sentMessage(ajax) {
   $("#message").val("");
}

function gotMessages(data) {
    var html = data;
    if (html != "") {
        $("#messages").html(html);
    }
}

// display a useful error message for debugging purposes (called only if the
// Ajax request did NOT come back successfully)
function ajaxFailure(xhr, status, exception) {
  console.log(xhr, status, exception);
}
