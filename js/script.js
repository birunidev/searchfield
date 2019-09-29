$(document).ready(function () {

    $('#mybtn').mouseover(function () {
        $('#mybtn').html("Go");
    });

    $('#mybtn').mouseleave(function () {
        $('#mybtn').html('<i class = "fas fa-search " ></i>');
    });

    $('#myInput').keypress(function (e) {
        if (e.which == 13) {
            $('#mybtn').submit();
        }
    });






});