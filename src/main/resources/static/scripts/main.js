/**
 * Action à réaliser lorsque le document est chargé
 */
$(document).ready(function () {
    ajoutTitre();
    addCardList();
    
});

/**
 * on appel l'api pour récupérer le titre du projet
 */
function ajoutTitre(){
    $.ajax({
        url: "http://localhost:8080/title"
    }).then(function (data) {
        document.getElementById("project-title").innerText = data;
    });
}

/**
 * Creation de la liste de carte avec la liste de venant de l'api
 */
function addCardList(){
    $.ajax({
        url: "http://localhost:8080/list"
    }).then(function (data) {
        data.forEach(element => {
            
            buildCard(element.id);
            console.log(element);
            document.getElementById('h2-card-'+ element.id).innerText = element.name;
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
 * @param {*} idFilm 
 */
function buildCard(idFilm){
    let newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.id = 'list-item-' + idFilm;
    newCard.innerHTML ='<div class="card-body"><h2 class="card-title" id="h2-card-'+ idFilm +'"></h2><h3 id="h3-card-'+ idFilm +'"></h3><h4 id="h4-card-'+ idFilm +'"></h4><h5>Texte d\'ouverture</h5><p class="card-text" id="p-card-'+ idFilm +'"></p></div>';
    console.log(newCard);
    document.getElementById('spy').appendChild(newCard);
}