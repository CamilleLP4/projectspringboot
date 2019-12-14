package projectspringboot.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import projectspringboot.api.StarWars;
import projectspringboot.model.Film;

/**
 * Controller executé au demarrage de SpringBoot
 * @author Camille
 * 12/12/19
 */
@CrossOrigin("*")
@RestController
public class Controller {
	
	List<Film> listFilm = new ArrayList<Film>();
	
	public Controller() {
		this.listFilm = StarWars.ApiStarWars();
	}
	
	/**
	 * Endpoint retounant l'intilulé du projet
	 * @return Retourne l'intitulé du projet
	 */
	@RequestMapping("/title")
	public String title(){
		return "Projet SpringBoot avec utilisation API REST et Javascript";
	}
	
	/**
	 * Endpoint retournant la liste de film
	 * @return Retourne la liste de film
	 */
	@RequestMapping("/list")
	public List<Film> getList(){
		return this.listFilm;
	}
	
	/**
	 * Endpoint retournant un film bien precis en fonction de son ID
	 * @param id id du film a renvoyer
	 * @return Retourne le film
	 */
	@RequestMapping("/byid/{id}")
	public ResponseEntity<Film> getById(@PathVariable("id") Integer id){
		for (Film film : this.listFilm) {
			if (film.getId().equals(id)) {
				return ResponseEntity.ok(film); //return le film
			}
		}
		return ResponseEntity.notFound().build(); //retourne 404 si id ne correspond pas
	}
	
	/**
	 * Endpoint recuperant les parametres pour ajouter un film a la liste
	 * @param name titre du film
	 * @param opening ouverture du film
	 * @param director realisateur du film
	 * @param date date de sortie du film
	 * @return retourne un status creation
	 * @throws URISyntaxException
	 */
	@RequestMapping("/add")
	public ResponseEntity<Film> addFilm(@RequestParam(value="name", defaultValue="")String name,
										@RequestParam(value="opening", defaultValue="")String opening,
										@RequestParam(value="director", defaultValue="Inconnu")String director,
										@RequestParam(value="date", defaultValue="Pas encore disponible")String date) throws URISyntaxException {
		if (this.listFilm.add(new Film(listFilm.size()+1, name, opening, director, date))) {
			return ResponseEntity.created(new URI("http://localhost:8080/byid/" + (listFilm.size()+1))).build();
		}
		return ResponseEntity.badRequest().build();
	}
}
