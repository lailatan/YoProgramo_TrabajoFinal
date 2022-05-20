package com.lailatan.Portfolio.util;

import java.security.SecureRandom;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Utils {
    
    public static boolean añoValido(Integer anio){
        return (anio>=1900 && anio<=3000);
    }

    public static boolean mailValido(String mail){
        Pattern pattern = Pattern.compile("^([0-9a-zA-Z]+[-._+&])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$");
        Matcher matcher = pattern.matcher(mail);
	return matcher.matches();    
        //email.matches("^[\\w-+]+(\\.[\\w-]{1,62}){0,126}@[\\w-]{1,63}(\\.[\\w-]{1,62})+/[\\w-]+$")
    }

    public static boolean largoValidoString(String texto){
        return (texto.length()>0 && texto.length()<=255);
    }

    public static boolean yyyymmValido(String texto){
        //Pattern pattern = Pattern.compile("^[0-1]{1}[1-2]{1}/[1-9]{1}[0-9]{3}$");
        Pattern pattern = Pattern.compile("^[1-9]{1}[0-9]{3}-[0-1]{1}[0-9]{1}$");
        Matcher matcher = pattern.matcher(texto);
	return matcher.matches();    
    }

    public static String encriptar(String palabra){
        int strength = 5; // work factor of bcrypt
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(strength, new SecureRandom());
        String encodedPalabra = bCryptPasswordEncoder.encode(palabra);
        //System.out.println("Palabra: " + palabra);
        //System.out.println("Encriptado: " + encodedPalabra);
        return encodedPalabra;
    }

    public static Boolean igualEncriptado(String palabra, String encriptado){
        int strength = 5; // work factor of bcrypt
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(strength, new SecureRandom());
        Boolean iguales = bCryptPasswordEncoder.matches(palabra, encriptado);
        //System.out.println("iguales: " + iguales);
        return iguales;
    }

}
