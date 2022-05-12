package com.lailatan.Portfolio.service;

import com.lailatan.Portfolio.model.Mail;
import com.lailatan.Portfolio.model.Persona;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService implements IMailService{
    
    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    private IPersonaService personaService;
    
    public Integer enviarMail(Mail mail){
        String mail_from = "portfolio.natalia19@gmail.com";
        String asunto = "Mensaje desde Portfolio";

        Persona persona = personaService.traerPersona();
        if (persona!=null){
            String mail_to = persona.getMail();
        
            DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
            mail.setSendDate(dtf.format(LocalDateTime.now()));

            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(mail_from);
            message.setSubject(asunto);
            message.setTo(mail_to);
            message.setText(mail.toString());
            try {
                javaMailSender.send(message);
                return 0;
            } catch (MailException e) {
                return -1;
            }
        } else {
            return -1;
        }
    }
    
}
