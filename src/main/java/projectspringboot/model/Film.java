package projectspringboot.model;

/**
 * Définition de l'objet Film
 * @author Camille
 * 12/12/19
 */
public class Film {

	private Integer id;
	private String name;
	private String opening;
	private String director;
	private String date;
	
	/**
	 * @param id Numero du film
	 * @param name Titre
	 * @param opening Texte d'ouverture
	 * @param director Realisateur
	 * @param date Date de sortie
	 */
	public Film(Integer id, String name, String opening, String director, String date) {
		this.id = id;
		this.name = name;
		this.opening = opening;
		this.director = director;
		this.date = date;
	}

	/**
	 * @return the id
	 */
	public Integer getId() {
		return id;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @return the opening
	 */
	public String getOpening() {
		return opening;
	}

	/**
	 * @return the director
	 */
	public String getDirector() {
		return director;
	}

	/**
	 * @return the date
	 */
	public String getDate() {
		return date;
	}
	
	/**
	 * @return chaine de caractere decrivant l'objet
	 */
	@Override
	public String toString() {
		return "Film [id=" + id + ", name=" + name + ", opening=" + opening + ", director=" + director + ", date="
				+ date + "]";
	}
}
