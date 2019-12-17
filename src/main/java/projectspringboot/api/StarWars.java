package projectspringboot.api;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.Charset;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import org.apache.commons.io.IOUtils;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import projectspringboot.model.Film;

/**
 * Classe qui appel l'api Starwars pour créer la liste pour mon api
 * @author Camille
 * 12/12/19
 */
public class StarWars {
	
	/**
	 * Methode recuperant le resultat de l'Api Star Wars et le traite pour l'inserer dans une liste
	 * @return retourne la liste des Films Star Wars
	 */
	public static List<Film> ApiStarWars(){
		List<Film> starWars = new ArrayList<Film>();
		SimpleDateFormat dateParse = new SimpleDateFormat("yyyy-MM-dd"); 
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
		String url = "https://swapi.co/api/films/?format=json";
		String jsonText;
		
		try {
			jsonText = IOUtils.toString(new URL(url), Charset.forName("UTF-8"));
			JSONObject jsonComplet = new JSONObject(jsonText);
			
			JSONArray film = jsonComplet.getJSONArray("results");
			for (Object object : film) {
				JSONObject current = (JSONObject) object;
				
				Integer id = current.getInt("episode_id");
				String name = current.getString("title");
				String opening = current.getString("opening_crawl").replaceAll("\r\n\r\n", "<br><br>"); //change "\r\n", "<br>"
				String openingfinal = opening.replaceAll("\r\n \r\n", "<br><br>"); //Pour film 7
				String director = current.getString("director");
				
				Date date = dateParse.parse(current.getString("release_date")); //Transforme en Date
				String releaseDate = dateFormat.format(date);					//Transforme en String
				
				starWars.add(new Film(id, name, openingfinal, director, releaseDate)); // ajoute un film à la liste
			}
			
			Collections.sort(starWars, new Comparator<Film>() { //tri la liste trouvé sur StackOverFlow
		        @Override
		        public int compare(Film o1, Film o2)
		        {
		            return  o1.getId().compareTo(o2.getId());
		        }
		    });
			
		} catch (MalformedURLException e) {
			System.out.println("Problème url");
			e.printStackTrace();
		} catch (IOException e) {
			System.out.println("Problème accès");
			e.printStackTrace();
		} catch (JSONException e) {
			System.out.println("Problème JSON");
			e.printStackTrace();
		} catch (ParseException e) {
			System.out.println("Problème Date");
			e.printStackTrace();
		}
		
		return starWars;
	}
}
