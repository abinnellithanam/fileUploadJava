package com.cadmium;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

public class DbConnector {
	public Connection getConnection(Properties connectionProperties)
			throws SQLException, ClassNotFoundException, InvalidConnectionPropertyException {
		String dbUrl = null, dbUname = null, dbPass = null;

		if (connectionProperties.getProperty("JDBC_DRIVER") != null) {
			Class.forName(connectionProperties.getProperty("JDBC_DRIVER"));
		} else {
			throw new InvalidConnectionPropertyException("JDBC Driver not found in property");
		}
		if (connectionProperties.getProperty("DB_URL") != null) {
			dbUrl = connectionProperties.getProperty("DB_URL");
		} else {
			throw new InvalidConnectionPropertyException("DB url not found in property");
		}
		if (connectionProperties.getProperty("USER") != null) {
			dbUname = connectionProperties.getProperty("USER");
		} else {
			throw new InvalidConnectionPropertyException("DB user name not found in property");
		}
		if (connectionProperties.getProperty("PASSWORD") != null) {
			dbPass = connectionProperties.getProperty("PASSWORD");
		} else {
			throw new InvalidConnectionPropertyException("DB user name not found in property");
		}
		return DriverManager.getConnection(dbUrl, dbUname, dbPass);
	}

	public Connection getConnection(String JdbcDriver, String dbUrl, String dbUname, String dbPass)
			throws SQLException, ClassNotFoundException {
		Class.forName(JdbcDriver);
		return DriverManager.getConnection(dbUrl, dbUname, dbPass);
	}

	public Connection getConnection() throws SQLException, ClassNotFoundException {
		Connection connection = null;
		if(DbConnectorConstants.ENABLE_CONNECTION_POOLING==true){
			Context ctx = null;
			DataSource dataSource = null;
			try {
				ctx = new InitialContext();
				
				System.out.println(DbConnectorConstants.JNDI_DB_PATH);
				dataSource = (DataSource) ctx.lookup(DbConnectorConstants.JNDI_DB_PATH);
				connection = dataSource.getConnection();
			} catch (Exception e) {
				e.printStackTrace();
			}	
		}else if(DbConnectorConstants.ENABLE_CONNECTION_POOLING==false){
			Class.forName(DbConnectorConstants.JDBC_DRIVER);
			connection= DriverManager.getConnection(DbConnectorConstants.DB_URL, DbConnectorConstants.DB_USER_NAME, DbConnectorConstants.DB_PASSWORD);
		}
		return connection;
	}

	public void closeConnection(Connection connection) throws SQLException {
		connection.close();
	}

	public void closeConnection(CallableStatement callableStmnt) throws SQLException {
		callableStmnt.close();
	}

	public void closeConnection(PreparedStatement prpdStmnt) throws SQLException {
		prpdStmnt.close();
	}
	public void closeConnection(ResultSet rsltSet) throws SQLException {
		rsltSet.close();
	}

	public void closeConnection(CallableStatement callableStmnt, Connection connection) throws SQLException {
		connection.close();
		callableStmnt.close();
	}
	public void closeConnection(Statement statement, Connection connection) throws SQLException {
		connection.close();
		statement.close();
	}
	public void closeConnection(ResultSet rsltSet, Connection connection) throws SQLException {
		connection.close();
		rsltSet.close();
	}
	public void closeConnection(PreparedStatement prpdStmnt, Connection connection) throws SQLException {
		connection.close();
		prpdStmnt.close();
	}
}
