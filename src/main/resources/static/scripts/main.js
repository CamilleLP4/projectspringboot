var bdd = "";

/**
 * Action à réaliser lorsque le document est chargé
 */
$(document).ready(function () {
    ajoutTitre();
    addCardList();
    document.getElementById("buttonindex").addEventListener("click", function () {
        document.getElementById('collapsefilm').className = 'collapsing';
        document.getElementById('collapseid').className = 'collapsing';
        addCardList();
     });
    document.getElementById("buttonid").addEventListener("click", function () {
        let inputId = document.getElementById('inputid');
        getById(inputId.value);
     });
     document.getElementById("buttonfilm").addEventListener("click", function () {
        addFilm();
     });
     document.getElementById("closeid").addEventListener("click", function () {
        document.getElementById('collapsefilm').className = 'collapsing';
        if (document.getElementById('scroolspy').style.cssText === 'top: auto;' && document.getElementById('collapseid').className === "collapse show") {
            document.getElementById('scroolspy').style = 'top: 5%;';
        } else {
            document.getElementById('scroolspy').style = 'top: auto;';
        }
     });
     document.getElementById("closefilm").addEventListener("click", function () {
        document.getElementById('collapseid').className = 'collapsing';
        if (document.getElementById('scroolspy').style.cssText === 'top: auto;' && document.getElementById('collapsefilm').className === "collapse show") {
            document.getElementById('scroolspy').style = 'top: 5%;';
        } else {
            document.getElementById('scroolspy').style = 'top: auto;';
        }
     });
     document.getElementById('sound').addEventListener('play', function () {
        console.log("ca marche");
        $('#byid').hide();
        $('#debut').hide();
        $('.star-wars').show();
        $('.fades').show();
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
 * Création de la liste de carte avec la liste de venant de l'api
 */
function addCardList(){
    $.ajax({
        url: "http://localhost:8080/" + bdd + "list"
    }).then(function (data) {
        $('.star-wars').hide();
        $('.fades').hide();
        $('#byid').hide();
        $('#index').show();
        document.getElementById('scroolspy').style = 'top: 5%;';
        document.getElementById('spy').innerHTML = "";
        document.getElementById('list-film').innerHTML = "";
        data.forEach(element => { 
            buildCard(element.id, 'spy');
            feedCard(element,element.id);
            let spyLink = document.createElement('a');
            spyLink.className = 'list-group-item list-group-item-action';
            spyLink.href = '#list-item-' + element.id;
            spyLink.textContent = element.name;
            document.getElementById('list-film').appendChild(spyLink);
        });
    });
}

/**
 * Création du squelette de la carte
 * @param {int} idFilm l'id du film pour créer des id html pour le remplissage 
 * @param {string} idHtml le nom de l'id html ou ajouté la carte
 */
function buildCard(idFilm, idHtml){
    let newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.id = 'list-item-' + idFilm;
    newCard.innerHTML ='<div class="card-body"><h2 class="card-title" id="h2-card-'+ idFilm +'"></h2><p id="pid-card-'+ idFilm +'"></p><h3 id="h3-card-'+ idFilm +'"></h3><h4 id="h4-card-'+ idFilm +'"></h4><h5><a href="#"  role="button" value="'+ idFilm +'" id="a-card-'+ idFilm +'" class="color-starwars btn card-link">Ouverture Défilante</a></h5><p class="card-text" id="p-card-'+ idFilm +'"></p></div>';
    document.getElementById(idHtml).appendChild(newCard);
}

/**
 * Remplissage de la carte
 * @param {Film} film Objet Film
 * @param {int} idFilm id du film
 */
function feedCard(film, idFilm){
    document.getElementById('h2-card-' + idFilm).innerText = film.name;
    document.getElementById('pid-card-' + idFilm).innerText = 'Id Film ' + film.id;
    document.getElementById('h3-card-' + idFilm).innerText = 'Réalisateur ' + film.director;
    document.getElementById('h4-card-' + idFilm).innerText = 'Date de sortie ' + film.date;
    document.getElementById('p-card-' + idFilm).innerHTML = film.opening;
    document.getElementById('a-card-' + idFilm).addEventListener("click", function () {        
        getById(film.id);
        buildOpening(film);        
        execOpening();
     });
}

/**
 * Création de la carte avec l'id demandé
 * @param {int} inputId 
 */
function getById(inputId){
    $.ajax({
        url: "http://localhost:8080/" + bdd + "byid/" + inputId
    }).then(function (data) {
        if (document.querySelector('.star-wars').style.cssText === 'display: none;') {
            $('#byid').show();
        }
        $('#index').hide();
        document.getElementById('byid').innerHTML = "";
        buildCard('0','byid');
        feedCard(data, '0');
        document.getElementById('collapseid').className = 'collapsing';
    }, function() {
        alert("Id Inconnu");
        document.getElementById('collapseid').className = 'collapsing';
        document.getElementById('scroolspy').style = 'top: 5%;';
      });
}

/**
 * Recuperation des informations dans les inputs et envoi vers l'api
 */
function addFilm(){
    let name = document.getElementById('inputtitre').value;
    let director = document.getElementById('inputdirector').value;
    let date = document.getElementById('inputdate').value;
    let opening = document.getElementById('inputouverture').value;
    let newopening = opening.replace(/\r?\n/g, '<br>');
    $.ajax({
        url: "http://localhost:8080/" + bdd + "add?name=" + name + "&opening=" + newopening + "&director=" + director + "&date=" + date
    }).then(function (data) {
        alert("Ajout Film validé")
        $('#index').hide();
        $('.star-wars').hide();
        $('.fades').hide();
        $('#byid').show();
        document.getElementById('byid').innerHTML = "";
        buildCard('0','byid');
        feedCard(data, '0');
        document.getElementById('collapsefilm').className = 'collapsing';
    }, function() {
        alert("Echec ajout Film");
        document.getElementById('collapsefilm').className = 'collapsing';
        document.getElementById('scroolspy').style = 'top: 5%;';
      });
}

function buildOpening(film){
    document.getElementById('section-s').innerHTML = "";
    let newDiv = document.createElement('div');
    newDiv.className = 'crawl';
    newDiv.id = 'defile';
    newDiv.innerHTML = '<div class="title"><h1 id="film-title"></h1></div><p id="opening-text"></p>';
    document.getElementById('section-s').appendChild(newDiv);
    document.getElementById('film-title').innerHTML = film.name;
    document.getElementById('opening-text').innerHTML = film.opening;
}

function execOpening(){
    document.getElementById('body').style = 'overflow: hidden;';
    let player = document.getElementById('sound');
    player.play();
    document.getElementById('sound').addEventListener('ended', function () {
        $('#byid').show();
        $('.star-wars').hide();
        $('.fades').hide();
        $('#debut').show();
        document.getElementById('body').style = 'overflow: auto;';
        console.log("fin");
        
     });
}