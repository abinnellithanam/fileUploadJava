package com.cadmium.mintova.utils;

public class Test {

	public static void main(String[] args) {		
		Validator vv =new Validator();
		String xxx="anand_87@gmail.com";
		System.out.println(xxx+"  "+vv.validateEmail(xxx));
	}
}
