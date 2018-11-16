function start() {
    "use strict";
    //With strict mode, you can not, for example, use undeclared variables.
    //x=5;
    //window.alert(typeof(x));
    
    var myButton = document.getElementsByTagName("button")[0];
    //document.getElementById("dec");
    myButton.onclick = myFunc;

    var myCheckbox = document.getElementById("bling");
    myCheckbox.onchange = blingAlert;

    var timer = null;

    function myFunc() {
        if (timer === null) {
            timer = setInterval(myAlert, 500);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }

    function myAlert() {
        var x = document.getElementById("userEntry");
        var oldFontSize = window.getComputedStyle(x, null)
                                .getPropertyValue("font-Size");
        
        //var oldFontSize = x.style.fontSize;
        x.style.fontSize = parseInt(oldFontSize) + 2 + "px";
    }

    function blingAlert() {
        //alert("Bling checked!");
        var x = document.getElementById("userEntry");
        var y = document.getElementById("bling");
        if (y.checked) {
            //x.style.fontWeight = "bold";
            x.style.color = "green";
            x.style.textDecoration = "underline";
        } else {
            //x.style.fontWeight = "normal";
            x.style.color = "black";
            x.style.textDecoration = "none";
        }
        //document.getElementById("decImg").src = "http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg";
        document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    }
}

window.onload = start;