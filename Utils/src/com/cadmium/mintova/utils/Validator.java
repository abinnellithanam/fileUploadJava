package com.cadmium.mintova.utils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Validator {
	private static Pattern pattern;
	private static Matcher matcher;
	private static final String EMAIL_PATTERN = "^[a-zA-Z]+[_A-Za-z0-9\\+]+(\\.[_A-Za-z0-9]+)*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,4})$";
	private static final String PASSWORD_PATTERN ="((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+=-]).{8,20})";
	private static final String INJECTION_ATTEMPT_PATTERN ="[^\"\'()\\[\\]]+(\\.[^\"\'()\\[\\]]+)*";
	private static final String SPECIAL_CHARS_PATTERN =    "[a-zA-Z]+[a-zA-Z0-9&_()]*+";
	public boolean validateEmail(String email) {
		pattern = Pattern.compile(EMAIL_PATTERN);
		matcher = pattern.matcher(email);
		return matcher.matches();
	}
	public boolean validatePassword(String password) {
		pattern = Pattern.compile(PASSWORD_PATTERN);
		matcher = pattern.matcher(password);
		return matcher.matches();
	}
	public boolean checkInjectionAttempt(String stringToCheck) {
		pattern = Pattern.compile(INJECTION_ATTEMPT_PATTERN);
		matcher = pattern.matcher(stringToCheck);
		return matcher.matches();
	}
	public boolean restrictSomeSpecialChars(String stringToCheck) {
		pattern = Pattern.compile(SPECIAL_CHARS_PATTERN);
		matcher = pattern.matcher(stringToCheck);
		return matcher.matches();
	}
//	public boolean validatePassword(String password) {
//		pattern = Pattern.compile(PASSWORD_PATTERN);
//		matcher = pattern.matcher(password);
//		return matcher.matches();
//	}
}
