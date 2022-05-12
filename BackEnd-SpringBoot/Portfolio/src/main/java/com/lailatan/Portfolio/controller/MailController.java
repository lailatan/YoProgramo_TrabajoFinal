
package com.lailatan.Portfolio.controller;

import com.lailatan.Portfolio.model.Mail;
import com.lailatan.Portfolio.service.IMailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("APIportfolio/mail")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*")

public class MailController {
    @Autowired
    private IMailService mailService;

    @PostMapping("/enviar")
    public Integer enviarMail(@RequestBody Mail mail) {
        return mailService.enviarMail(mail);
    } 
    
}
