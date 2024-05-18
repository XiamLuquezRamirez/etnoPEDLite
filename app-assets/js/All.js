$(document).ready(function () {
    $.extend({
        AbrirTemas: function (id) {
            if (id === "T1P1") {
                $("#TemasP1").show();
                $("#UnidP1").hide();
            }
        },
        VerVideo: function () {
            $("#Video").show();
            $("#iframe").hide();
            var videoID = "videoclipAnima";

            $("#" + videoID).get(0).pause();
            $("#" + videoID).get(0).load();
            $("#" + videoID).get(0).play();

            $("#btn_atras").show();
            $("#btn_video").hide();
        },
        SalirVideo: function () {
            $("#iframe").show();
            $("#Video").hide();

            $("#btn_video").show();
            $("#btn_atras").hide();

            var videoID = "videoclipAnima";
            $("#" + videoID).get(0).pause();
        },
        LeerDatos: function () {
   
            const xhttp = new XMLHttpRequest();
            xhttp.open("GET", "Modulo20.json", true);
            xhttp.send();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let datos = JSON.parse(xhttp.responseText);
                    var contenido = "<div class='card-body'>";
                    for (let item of datos) {
                        contenido += '<div class="bs-callout-primary callout-border-left callout-transparent p-1">' + '<h4 class="primary">' + item.titulo + '</h4>' + item.cont_documento + '</div>';

                    }
                    contenido += "</div>";

                    $("#datos").html(contenido);
                }
            };
        }
    });
});
