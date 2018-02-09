package com.cadmium;

import com.cadmium.mintova.utils.PropertyFileReader;

public final class DbConnectorConstants {
	protected static String JNDI_DB_PATH = null;
	protected static String DB_USER_NAME = null;
	protected static String DB_PASSWORD = null;
	protected static String DB_URL = null;
	protected static String JDBC_DRIVER = null;
	protected static boolean ENABLE_CONNECTION_POOLING = false;
	static {
		PropertyFileReader propFileReader = new PropertyFileReader();
		if(propFileReader.getProperty("ENABLE_CONNECTION_POOLING", "/mintova/dbconnector.properties").equals("true")) {
			System.out.println("ENABLE_CONNECTION_POOLING ---- true");
			ENABLE_CONNECTION_POOLING =true;
			if (propFileReader.getProperty("JNDI_DB_PATH", "/mintova/dbconnector.properties") == "enabled") {
				System.out.println("JNDI_DB_PATH cannot be null");
			} else {
				JNDI_DB_PATH = propFileReader.getProperty("JNDI_DB_PATH", "/mintova/dbconnector.properties");
			}
		} else {
			System.out.println("ENABLE_CONNECTION_POOLING ---- false");
			ENABLE_CONNECTION_POOLING =false;
			if (propFileReader.getProperty("JDBC_DRIVER", "/mintova/dbconnector.properties") == null) {
				System.out.println("JDBC_DRIVER cannot be null");
			} else {
				JDBC_DRIVER = propFileReader.getProperty("JDBC_DRIVER", "/mintova/dbconnector.properties");
			}
			if (propFileReader.getProperty("DB_URL", "/mintova/dbconnector.properties") == null) {
				System.out.println("DB_URL cannot be null");
			} else {
				DB_URL = propFileReader.getProperty("DB_URL", "/mintova/dbconnector.properties");
			}
			if (propFileReader.getProperty("DB_USER_NAME", "/mintova/dbconnector.properties") == null) {
				System.out.println("DB_USER_NAME cannot be null");
			} else {
				DB_USER_NAME = propFileReader.getProperty("DB_USER_NAME", "/mintova/dbconnector.properties");
			}
			if (propFileReader.getProperty("DB_PASSWORD", "/mintova/dbconnector.properties") == null) {
				System.out.println("DB_PASSWORD cannot be null");
			} else {
				DB_PASSWORD = propFileReader.getProperty("DB_PASSWORD", "/mintova/dbconnector.properties");
			}

		}
	}
}
