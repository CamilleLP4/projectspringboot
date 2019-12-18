package projectspringboot.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Initialise une connexion vers la base à partir des informations fourni par l'utilisateur.
 * 
 * @author Camille
 * 17/12/19
 */
public class ConnectTable {

	private Connection connection;

	private int successConnection;
	private String password;
	private String user;
	private String url;


	/**
	 * Initialise la connection à la création.
	 * @param password mot de passe
	 * @param user nom d'utilisateur
	 * @param base nom de la base
	 * @param port numero du port
	 */
	public ConnectTable(String password, String user, String base, String port) {
		this.password = password;
		this.user = user;
		this.url = "jdbc:mysql://localhost:" + port + "/" + base + "?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC";
		try {
			this.initConnection();
			this.successConnection = 1;
		} catch (SQLException e) {
			e.printStackTrace();
			this.successConnection = 0;
			System.out.println("Echec connexion");
		}
	}

	/**
	 * Retourne la connection déjà initialisée.
	 * 
	 * @return la connection déjà initialisée.
	 */
	public Connection getConnection() {
		if (this.successConnection == 1) {
			return this.connection;
		}
		return null;
	}

	/**
	 * Initialise la connection.
	 * 
	 * @throws SQLException
	 */
	private void initConnection() throws SQLException {
		this.connection = DriverManager.getConnection(this.url, this.user, this.password);
	}
}
