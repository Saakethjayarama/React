package in.ac.jyothyit.organization.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;




public class jdbcUtitilies
{
	public static Connection getConnection(String dbName)
	{
		String driver="com.mysql.jdbc.Driver";
		String url="jdbc:mysql://localhost:3306/"+ dbName;
		String username="root";
		String password="";
		Connection connection=null;
		try
		{
			Class.forName(driver);
			connection=DriverManager.getConnection(url,username,password);
		}
		catch(ClassNotFoundException enfe)
		{
			System.out.println(enfe);
		
		}
		catch(SQLException sqle)
		{
			System.out.println(sqle);
		}
		return connection;
	}
	public static void closeConnection(Connection connection)
	{
		try
		{
			if(connection!=null)
				connection.close();
		}
		catch(SQLException sqle)
		{
			System.out.println("jdbcUtitilies.closeConnection() : "+sqle);
		}
	}
	public static void closeStatement(Statement statement)
	{
		try
		{
			if(statement!=null)
				statement.close();
		}
		catch(SQLException sqle)
		{
			System.out.println("jdbcUtitilies.closeStatement() : "+sqle);
		}
	}
}