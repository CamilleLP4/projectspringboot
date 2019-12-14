/**
 * Action à réaliser lorsque le document est chargé
 */
$(document).ready(function () {
    // on utilise jquery pour faire appel à l'api de starwars
    $.ajax({
        url: "http://localhost:8080/title"
    }).then(function (data) {
        document.getElementById("project-title").innerText = data;
    });
});