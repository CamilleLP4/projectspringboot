/**
 * Action à réaliser lorsque le document est chargé
 */
$(document).ready(function () {
    ajoutTitre();
    addCardList();
    /**
     * Ajoute un évenement click au bouton Accueil
     * Ferme les sous-menu et actualise l'affichage de la liste
     */
    document.getElementById("buttonindex").addEventListener("click", function () {
        document.getElementById('collapsefilm').className = 'collapsing';
        document.getElementById('collapseid').className = 'collapsing';
        addCardList();
    });
    /**
    * Ajoute un évenement click au bouton Confirm de Afficher par ID
    * Récupère la valeur dans l'input lié et execute getById
    */
    document.getElementById("buttonid").addEventListener("click", function () {
        let inputId = document.getElementById('inputid');
        getById(inputId.value);
    });
    /**
    * Ajoute un évenement click au bouton Confirm de Ajouter Film
    * Execute addFilm
    */
    document.getElementById("buttonfilm").addEventListener("click", function () {
        addFilm();
    });
    /**
    * Ajoute un évenement click au bouton Afficher par ID
    * Ferme les autres sous menus et corrige l'affichage de la scroolspy
    */
    document.getElementById("closeid").addEventListener("click", function () {
        document.getElementById('collapsefilm').className = 'collapsing';
        if (document.getElementById('scroolspy').style.cssText === 'top: auto;' && document.getElementById('collapseid').className === "collapse show") {
            document.getElementById('scroolspy').style = 'top: 6%;';
        } else {
            document.getElementById('scroolspy').style = 'top: auto;';
        }
    });
    /**
    * Ajoute un évenement click au bouton Ajouter Film
    * Ferme les autres sous menus et corrige l'affichage de la scroolspy
    */
    document.getElementById("closefilm").addEventListener("click", function () {
        document.getElementById('collapseid').className = 'collapsing';
        if (document.getElementById('scroolspy').style.cssText === 'top: auto;' && document.getElementById('collapsefilm').className === "collapse show") {
            document.getElementById('scroolspy').style = 'top: 6%;';
        } else {
            document.getElementById('scroolspy').style = 'top: auto;';
        }
    });
    /**
    * Ajoute un évenement click au bouton Active DB/Désactive DB
    * Récupere les infos pour la connexion DB et se connecte ou réactive la fonction API Swapi
    * Actualise la liste et affiche un message
    */
    document.getElementById("buttondb").addEventListener("click", function () {
        if (document.getElementById('buttondb').innerText === "Active DB") {
            let port = prompt("Port de la base");
            let base = prompt("Nom de la base");
            let user = prompt("Username de la base");
            let password = prompt("Password de la base");
            $.ajax({
                url: "http://localhost:8080/db?port=" + port + "&base=" + base + "&user=" + user + "&password=" + password
            }).then(function (data) {
                document.getElementById('buttondb').innerText = "Désactive DB";
                addCardList();
                alert(data);
            }, function () {
                alert(data);
            });
        } else {
            $.ajax({
                url: "http://localhost:8080/db?port=&base=api&user=&password="
            }).then(function (data) {
                document.getElementById('buttondb').innerText = "Active DB";
                addCardList();
                alert(data);
            }, function () {
                alert(data);
            });
        }
    });
    /**
     * Au démarrage de la musique cache les sections inutiles et lance le defilement du texte
     */
    document.getElementById('sound').addEventListener('play', function () {
        $('#byid').hide();
        $('#debut').hide();
        $('.star-wars').show();
        $('.fades').show();
    });
    /**
    * A la fin de la musique cache les sections inutiles et remet à jour le style
    */
    document.getElementById('sound').addEventListener('ended', function () {
        $('#byid').show();
        $('.star-wars').hide();
        $('.fades').hide();
        $('#debut').show();
        document.getElementById('body').style = 'overflow: auto;';
    });
});

/**
 * Appel l'API SpringBoot pour récupérer le titre du projet
 */
function ajoutTitre() {
    $.ajax({
        url: "http://localhost:8080/title"
    }).then(function (data) {
        document.getElementById("project-title").innerText = data;
    });
}

/**
 * Création de la liste de carte avec la liste venant de l'API SpringBoot
 */
function addCardList() {
    $.ajax({
        url: "http://localhost:8080/list"
    }).then(function (data) {
        //Cache les sections inutiles, vide les champs
        $('.star-wars').hide();
        $('.fades').hide();
        $('#byid').hide();
        $('#index').show();
        document.getElementById('scroolspy').style = 'top: 6%;';
        document.getElementById('spy').innerHTML = "";
        document.getElementById('list-film').innerHTML = "";
        //Pour chaque élèment de la liste buildCard, feedCard, construit et rempli la scroolspy
        data.forEach(element => {
            buildCard(element.id, 'spy');
            feedCard(element, element.id);
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
 * @param {string} idHtml le nom de l'id html où placer la carte
 */
function buildCard(idFilm, idHtml) {
    let newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.id = 'list-item-' + idFilm;
    newCard.innerHTML = '<div class="card-body"><h2 class="card-title" id="h2-card-' + idFilm + '"></h2><p id="pid-card-' + idFilm + '"></p><h3 id="h3-card-' + idFilm + '"></h3><h4 id="h4-card-' + idFilm + '"></h4><h5><a href="#"  role="button" value="' + idFilm + '" id="a-card-' + idFilm + '" class="color-starwars btn card-link">Ouverture Défilante</a></h5><p class="card-text" id="p-card-' + idFilm + '"></p></div>';
    document.getElementById(idHtml).appendChild(newCard);
}

/**
 * Remplissage de la carte
 * @param {Film} film Objet Film
 * @param {int} idFilm id du film
 */
function feedCard(film, idFilm) {
    document.getElementById('h2-card-' + idFilm).innerText = film.name;
    document.getElementById('pid-card-' + idFilm).innerText = 'Id Film ' + film.id;
    document.getElementById('h3-card-' + idFilm).innerText = 'Réalisateur ' + film.director;
    document.getElementById('h4-card-' + idFilm).innerText = 'Date de sortie ' + film.date;
    document.getElementById('p-card-' + idFilm).innerHTML = film.opening;
    /**
     * Ajoute un évenement click au lien Ouverture défilante
     * Execute getById puis buildOpening et enfin execOpening
     */
    document.getElementById('a-card-' + idFilm).addEventListener("click", function () {
        getById(film.id);
        buildOpening(film);
        execOpening();
    });
}

/**
 * Affichage de la carte avec l'id demandé
 * @param {int} inputId 
 */
function getById(inputId) {
    $.ajax({
        url: "http://localhost:8080/byid/" + inputId
    }).then(function (data) {
        //Si reussi cache les sections inutiles, vide les champs, buildCard, feedCard et ferme le sous menu
        if (document.querySelector('.star-wars').style.cssText === 'display: none;') {
            $('#byid').show();
        }
        $('#index').hide();
        document.getElementById('byid').innerHTML = "";
        buildCard('0', 'byid');
        feedCard(data, '0');
        document.getElementById('collapseid').className = 'collapsing';
    }, function () {
        //Si echec affiche un message et ferme le sous menu
        alert("Id Inconnu");
        document.getElementById('collapseid').className = 'collapsing';
        document.getElementById('scroolspy').style = 'top: 6%;';
    });
}

/**
 * Recuperation des informations dans les inputs et envoi vers l'api
 */
function addFilm() {
    let name = document.getElementById('inputtitre').value;
    let director = document.getElementById('inputdirector').value;
    let date = document.getElementById('inputdate').value;
    let opening = document.getElementById('inputouverture').value;
    let newopening = opening.replace(/\r?\n/g, '<br>');
    $.ajax({
        url: "http://localhost:8080/add?name=" + name + "&opening=" + newopening + "&director=" + director + "&date=" + date
    }).then(function (data) {
        //Si reussi affiche un message, cache les sections inutiles, vide les champs, buildCard, feedCard et ferme le sous menu
        alert("Ajout Film validé")
        $('#index').hide();
        $('.star-wars').hide();
        $('.fades').hide();
        $('#byid').show();
        document.getElementById('byid').innerHTML = "";
        buildCard('0', 'byid');
        feedCard(data, '0');
        document.getElementById('collapsefilm').className = 'collapsing';
    }, function () {
        //Si echec affiche un message et ferme le sous menu
        alert("Echec ajout Film");
        document.getElementById('collapsefilm').className = 'collapsing';
        document.getElementById('scroolspy').style = 'top: 6%;';
    });
}

/**
 * Vide la section et construit le texte à defiler
 * @param {Film} film film a afficher
 */
function buildOpening(film) {
    document.getElementById('section-s').innerHTML = "";
    let newDiv = document.createElement('div');
    newDiv.className = 'crawl';
    newDiv.id = 'defile';
    newDiv.innerHTML = '<div class="title"><h1 id="film-title"></h1></div><p id="opening-text"></p>';
    document.getElementById('section-s').appendChild(newDiv);
    document.getElementById('film-title').innerHTML = film.name;
    document.getElementById('opening-text').innerHTML = film.opening;
}

/**
 * Met à jour le style et lance la musique
 */
function execOpening() {
    document.getElementById('body').style = 'overflow: hidden;';
    let player = document.getElementById('sound');
    player.play();
}