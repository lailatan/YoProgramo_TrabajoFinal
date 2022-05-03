
package com.lailatan.Portfolio.controller;

import com.lailatan.Portfolio.model.Persona;
import com.lailatan.Portfolio.service.IPersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/APIporfolio/persona")
public class PersonaController {
     @Autowired
    private IPersonaService personaService;

    @GetMapping("/find")
    @ResponseBody
    public Persona traerPersona() {
        return personaService.traerPersona();
    } 

    @PutMapping("/save")
    @ResponseBody
    public Persona guardarPersona(@RequestBody Persona persona) {
        return personaService.guardarPersona(persona);
    } 
}
