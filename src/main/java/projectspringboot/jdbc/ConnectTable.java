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

	private int successConnection = 0;
	private String password = "root";
	private String user = "root";
	private String url = "jdbc:mysql://localhost:3306/filmsstarwars?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC";
	// Les parametres ci-dessus sont a changer au besoin pour la connexion a la BDD

	/**
	 * Initialise la connection à la création.
	 */
	public ConnectTable() {
		try {
			this.initConnection();
			this.successConnection = 1;
		} catch (SQLException e) {
			this.successConnection = 0;
		}
	}

	/**
	 * @param password
	 * @param user
	 * @param url
	 */
	public ConnectTable(String password, String user, String url) {
		super();
		this.password = password;
		this.user = user;
		this.url = url;
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
