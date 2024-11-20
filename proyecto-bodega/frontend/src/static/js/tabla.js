$(document).ready(function () {
    $('#usuarioTable').DataTable();
});

$("#toggle-btn").on("click", function () {
    $("#sidebar").toggleClass("collapsed");
    });