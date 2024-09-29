
    $(document).ready(function () {
        $('#elementosTable').DataTable();
    });

    $("#toggle-btn").on("click", function () {
        $("#sidebar").toggleClass("collapsed");
    });
