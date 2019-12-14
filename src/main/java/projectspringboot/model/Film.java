package projectspringboot.model;

public class Film {

	private Integer id;
	private String name;
	private String opening;
	private String director;
	private String date;
	
	/**
	 * @param id
	 * @param name
	 * @param opening
	 * @param director
	 * @param date
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
	
	@Override
	public String toString() {
		return "Film [id=" + id + ", name=" + name + ", opening=" + opening + ", director=" + director + ", date="
				+ date + "]";
	}
}
