

package projectspringboot.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import projectspringboot.model.Film;

/**
 * Toutes les requetes sont regroupées ici. Elles utilisent une connexion préalablement créée.
 * 
 * @author Camille
 * 17/12/19
 */
public class Requetes {
	
	/**
	 * Recupere depuis la base la list des films
	 * @param conn acces à la base
	 * @return Retourne la List de Film
	 */
	public static List<Film> getListFilm(Connection conn){
		List<Film> listeFilm = new ArrayList<Film>();
		
		try {
			Statement stmt = conn.createStatement();
			String query = "select id, name, opening_crawl, director, date from film";

			ResultSet rs = stmt.executeQuery(query);
			while (rs.next()) {
				Integer id = rs.getInt("id");
				String name = rs.getString("name");
				String opening = rs.getString("opening_crawl");
				String director = rs.getString("director");
				String date = rs.getString("date");
				listeFilm.add(new Film(id, name, opening, director, date));
			}
		} catch (SQLException e) {
			System.out.println("Défaut Récuperation Liste");
			e.printStackTrace();
		}
		return listeFilm;
	}

	/**
	 * Ajoute un film à la base
	 * @param conn acces a la base
	 * @param film film a mettre dans la base
	 * @return renvoi true si l'insertion se deroule correctement
	 */
	public static boolean addFilm(Connection conn, Film film) {
		try {
			PreparedStatement statement = conn.prepareStatement("insert into film (id, name, director, date, opening_crawl) values(?, ?, ?, ?, ?)");
			statement.setInt(1, film.getId());
			statement.setString(2, film.getName());
			statement.setString(3, film.getDirector());
			statement.setString(4, film.getDate());
			statement.setString(5, film.getOpening());
			statement.executeUpdate();
			return true;
		} catch (SQLException e) {
			System.out.println("Défaut Ajout Film");
			e.printStackTrace();
			return false;
		}
		
	}
}
