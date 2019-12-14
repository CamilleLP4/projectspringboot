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
 * @author Camille
 *
 */
@CrossOrigin("*")
@RestController
public class Controller {
	
	List<Film> listFilm = new ArrayList<Film>();
	
	public Controller() {
		this.listFilm = StarWars.ApiStarWars();
	}
	
	@RequestMapping("/title")
	public String title(){
		return "Projet SpringBoot avec utilisation API REST et Javascript";
	}
	
	@RequestMapping("/list")
	public List<Film> getList(){
		return this.listFilm;
	}
	
	@RequestMapping("/byid/{id}")
	public ResponseEntity<Film> getById(@PathVariable("id") Integer id){
		for (Film film : this.listFilm) {
			if (film.getId().equals(id)) {
				return ResponseEntity.ok(film);
			}
		}
		return ResponseEntity.notFound().build();
	}
	
	@RequestMapping("/add")
	public ResponseEntity<Film> addFilm(@RequestParam(value="name", defaultValue="")String name,
										@RequestParam(value="opening", defaultValue="")String opening,
										@RequestParam(value="director", defaultValue="Inconnu")String director,
										@RequestParam(value="date", defaultValue="Pas encore disponible")String date) throws URISyntaxException {
		this.listFilm.add(new Film(listFilm.size()+1, name, opening, director, date));
		return ResponseEntity.created(new URI("http://localhost:8080/byid/" + (listFilm.size()+1))).build();
	}
}
