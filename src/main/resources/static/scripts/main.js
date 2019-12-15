var bdd = "";

/**
 * Action à réaliser lorsque le document est chargé
 */
$(document).ready(function () {
    /*$('#opening-crawl').hide();
    $('#byid').hide();*/
    ajoutTitre();
    addCardList();
    document.getElementById("buttonid").addEventListener("click", function () {
        getById();
     });
     document.getElementById("buttonfilm").addEventListener("click", function () {
        addFilm();
     });
});

/**
 * on appel l'api pour récupérer le titre du projet
 */
function ajoutTitre(){
    $.ajax({
        url: "http://localhost:8080/" + bdd + "title"
    }).then(function (data) {
        document.getElementById("project-title").innerText = data;
    });
}

/**
 * Creation de la liste de carte avec la liste de venant de l'api
 */
function addCardList(){
    $.ajax({
        url: "http://localhost:8080/" + bdd + "list"
    }).then(function (data) {
        data.forEach(element => { 
            buildCard(element.id, 'spy');
            document.getElementById('h2-card-'+ element.id).innerText = element.name;
            document.getElementById('pid-card-'+ element.id).innerText = 'Id Film ' + element.id;
            document.getElementById('h3-card-'+ element.id).innerText = 'Réalisateur ' + element.director;
            document.getElementById('h4-card-'+ element.id).innerText = 'Date de sortie ' + element.date;
            document.getElementById('p-card-'+ element.id).innerHTML = element.opening;
            let spyLink = document.createElement('a');
            spyLink.className = 'list-group-item list-group-item-action';
            spyLink.href = '#list-item-' + element.id;
            spyLink.textContent = element.name;
            document.getElementById('list-film').appendChild(spyLink);
        });
    });
}

/**
 * Creation du squelette de la carte
 * @param {*} idFilm l'id du film pour créer des id html pour le remplissage
 */
function buildCard(idFilm, idHtml){
    let newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.id = 'list-item-' + idFilm;
    newCard.innerHTML ='<div class="card-body"><h2 class="card-title" id="h2-card-'+ idFilm +'"></h2><p id="pid-card-'+ idFilm +'"></p><h3 id="h3-card-'+ idFilm +'"></h3><h4 id="h4-card-'+ idFilm +'"></h4><h5>Texte d\'ouverture</h5><p class="card-text" id="p-card-'+ idFilm +'"></p></div>';
    document.getElementById(idHtml).appendChild(newCard);
}

/**
 * Creation de la carte avec l'id demandé
 */
function getById(){
    let inputId = document.getElementById('inputid');
    /*console.log(inputId.value);*/
    $.ajax({
        url: "http://localhost:8080/" + bdd + "byid/" + inputId.value
    }).then(function (data) {
        /*console.log(data);*/
        $('#index').hide();
        document.getElementById('byid').innerHTML = "";
        buildCard('0','byid');
        document.getElementById('h2-card-0').innerText = data.name;
        document.getElementById('pid-card-0').innerText = 'Id Film ' + data.id;
        document.getElementById('h3-card-0').innerText = 'Réalisateur ' + data.director;
        document.getElementById('h4-card-0').innerText = 'Date de sortie ' + data.date;
        document.getElementById('p-card-0').innerHTML = data.opening;
        document.getElementById('collapseid').className = 'collapse';
    }, function() {
        alert("Id Inconnu");
        document.getElementById('collapseid').className = 'collapse';
      });
}

/**
 * Recuperation des information dans les inputs et envoi vers l'api
 */
function addFilm(){
    let name = document.getElementById('inputtitre').value;
    let director = document.getElementById('inputdirector').value;
    let date = document.getElementById('inputdate').value;
    let opening = document.getElementById('inputouverture').value;
    console.log(opening);
    let newopening = opening.replace(/\r?\n/g, '<br>');
    console.log(newopening);
    $.ajax({
        url: "http://localhost:8080/" + bdd + "add?name=" + name + "&opening=" + newopening + "&director=" + director + "&date=" + date
    }).then(function (data) {
        console.log(data);
        alert("Ajout Film validé")
        document.getElementById('collapsefilm').className = 'collapse';
    }, function() {
        alert("Echec ajout Film");
        console.l
        document.getElementById('collapsefilm').className = 'collapse';
      });
}