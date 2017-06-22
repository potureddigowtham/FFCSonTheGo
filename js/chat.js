$(function () {
    $("#minim-chat").click(function () {
        $("#minim-chat").hide();
        $("#maxi-chat").show();
        $("#chatbox").removeClass("open");
    });

    $("#maxi-chat").click(function () {
        $("#maxi-chat").hide();
        $("#minim-chat").show();
        $("#chatbox").addClass("open");
    });
});