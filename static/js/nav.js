$(document).ready(function () {
    $("#home_menu .eye").click(function () {
        var leye = $(this).parent();
        leye.css({
            "height": "20%",
            "margin-top": "0%"
        });
        leye.parent().find("h1").css('margin-top', '30%');
        setTimeout(function () {
            leye.css({
                "height": "85%",
                "margin-top": "0%"
            });
            leye.parent().find("h1").css('margin-top', '10%');

            switch (leye.parent().find("h1").html()) {
            case "Kids":
                location.href = "demo.htm";
                break;
            case "Parent":
                break;
            }
        }, 400);




    });



});