# Projet Springboot

Auteur : Camille

Date de début : 12/12/19

Contexte : Projet Springboot FullStack

Technologie utilisé

* Back-End
    * Java
    * Tomcat
    * Json
    * SQL
* Front-End
    * HTML
    * Javascript
    * CSS

## Description générale

L'application est une API qui contient les Films Star Wars.
Seul le titre, le nom du Réalisateur, la date de sortie du film et le texte d'ouverture sont utilisable.

Le Front-End permet d'afficher les résultats en faisant appel à l'API pour consulter et interagir avec les Endpoints.
Les Endpoints sont eux basé sur le Back-End constituant par défaut la liste de film grâce à [SWAPI](https://swapi.co/).
Il est possible d'activer une base de données pour la persistance des données.

![Schema](https://github.com/CamilleLP4/projectspringboot/blob/master/docs/maquette/schema.PNG?raw=true)

## Présentation Front-End

![Visuel Front](https://github.com/CamilleLP4/projectspringboot/blob/master/docs/maquette/front.PNG?raw=true)

[Maquette Initiale](https://github.com/CamilleLP4/projectspringboot/blob/master/docs/maquette/maquette.PNG?raw=true)

### Accueil

Page d'accueil du Front. Affiche la liste de Film.

### Afficher par ID

Affiche la carte du film correspondant à l'ID demandé, si il existe.

### Ajouter Film

Permet d'ajouter un film à l'API, si réussi la carte du film est affiché.

### Active/Desactive DB

Switch entre l'accès à la base de données ou [SWAPI](https://swapi.co/).

### Documentation

[C'est la documentation de l'API. (Seulement la doc)](https://camillelp4.github.io/projectspringboot/documentation.html).

## Présentation Back-End

![Visuel Front](https://github.com/CamilleLP4/projectspringboot/blob/master/docs/maquette/back.PNG?raw=true)

### [Voir Javadoc](https://camillelp4.github.io/projectspringboot/)

## Base

![Visuel Front](https://github.com/CamilleLP4/projectspringboot/blob/master/docs/maquette/Base.PNG?raw=true)

[Fichier Sql pour création Base et jeu de données](https://github.com/CamilleLP4/projectspringboot/tree/master/sql)

## Notice

Clone le projet puis suivre le gif.

![Visuel Front](https://github.com/CamilleLP4/projectspringboot/blob/master/docs/maquette/notice.gif?raw=true)