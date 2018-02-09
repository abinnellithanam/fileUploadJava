package com.cadmium.mintova.utils;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class PropertyFileReader {
	public Properties readPropertyFile(String propertyFilePath){
		InputStream propertiesFileStream = null;
		Properties prop=new Properties();
		try {
			propertiesFileStream=new FileInputStream(propertyFilePath);
			prop.load(propertiesFileStream);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}finally{
			try {
				propertiesFileStream.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return prop;
	}
	public String getProperty(String propertyName,Properties prop) {
		return prop.getProperty(propertyName);
	}
	public String getProperty(String propertyName,String propertyFilePath) {
		
		InputStream propertiesFileStream = null;
		Properties prop=new Properties();
		try {
			propertiesFileStream=new FileInputStream(propertyFilePath);
			prop.load(propertiesFileStream);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}finally{
			try {
				propertiesFileStream.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		System.out.println("in Property file reader getProperty -- propertyName : "+propertyName+"--propertyFilePath :  "+propertyFilePath +"\t : "+prop.getProperty(propertyName));
		return prop.getProperty(propertyName);
	}
}
