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

public class StarWars {
	
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
				String opening = current.getString("opening_crawl");
				String director = current.getString("director");
				
				Date date = dateParse.parse(current.getString("release_date"));
				String releaseDate = dateFormat.format(date);
				starWars.add(new Film(id, name, opening, director, releaseDate));
			}
			
			Collections.sort(starWars, new Comparator<Film>() {
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
	
	public static void main(String[] args) throws MalformedURLException, IOException, JSONException, ParseException {
		List<Film> test = ApiStarWars();
		for (Film film : test) {
			System.out.println(film.toString());
			System.out.println();
		}
	}
}
