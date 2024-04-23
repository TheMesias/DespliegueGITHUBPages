
//slideDown slideUp

$(() => {
    $("#ocultarbtn").click(() => {
        $("li").fadeOut();
    }); 

    $("#mostrarbtn").click(() => {
        $("li").fadeIn();
    });

    $("#miBoton").click(() => {
        alert("Has hecho clic en el botón.");
    });

    /*
    $('ul li:nth-child(2)').click(() => {
        alert("Has hecho clic en el segundo elemento de la lista.");
        
    }).css("cursor", "pointer").css("color", "blue"); */
    
})

/*

$("#togglebtn").click(() => {
    $('ul li:first').toggle();
});

$(document).ready(function(){
    $("#miBoton").click(function(){
        //alert("Has hecho clic en el botón.");
        /* $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            type: "GET",
            success: function(result){
                var html = '';
                $.each(result, function(key, value){
                    html += '<h3>' + value.title + '</h3>';
                    html += '<p>' + value.body + '</p>';
                });
                $("#resultados").html(html);
            },
            error: function(error){
                console.log("Hubo un error: ", error);
            }
        }); */
