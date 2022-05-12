package com.lailatan.Portfolio.model;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter    
public class Mail {
    private String from;
    private String subject;
    private String text;
    private String sendDate;

    public Mail(){}

    public Mail(String from, String subject, String text) {
        this.from = from;
        this.subject = subject;
        this.text = text;
    }

    public Mail(String from, String subject, String text, String sendDate) {
        this.from = from;
        this.subject = subject;
        this.text = text;
        this.sendDate = sendDate;
    }
    

    @Override
    public String toString() {
        String mensaje= "Fecha: " + sendDate +
                        "\nMail: " + from + 
                        "\nTema: " + subject +               
                        "\n\nMensaje: \n" + text; 
        return mensaje;
    }

    
}
