$(document).ready(function () {
    $("#movies").load("movies.html");
    $("#movies").change(function () { 
        let movie = $(this).val();
        let ApiUri = 'https://api.themoviedb.org/3/movie/'
        + movie
        + '?api_key=8f0483cd6dc980b9e25af20dc7376de9';
        $.ajax({
            type: "GET",
            url: ApiUri,
            dataType: "json",
            success: function (response) {
                console.log(response.overview);
                $.each(response, function () { 
                     $("#movieinfo").html("");
                     $("#movieinfo").append(response.overview);
                     if($("#movieinfo").attr("hidden")){
                         $("#movieinfo").show();
                     }

                     $("#movieinfo").css(
                         {
                         "border-color" : "C1E0FF",
                         "border-weight" : "1px",
                         "border-style" : "solid",
                         "margin-top" : "1rem",
                         "width" : "50%",
                         "padding" : "0.5rem"
                        });
                });
            },
            error: function (xhr, error) {
                $("#info").append(error.toUpperCase() + " .HTTPStatus: "
                + xhr.status);
              }
        });
    });
});