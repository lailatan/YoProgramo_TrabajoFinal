
package com.lailatan.Portfolio.controller;

import com.lailatan.Portfolio.model.Persona;
import com.lailatan.Portfolio.service.IPersonaService;
import com.lailatan.Portfolio.util.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("APIportfolio/persona")
//@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*")
@CrossOrigin(origins = {"${settings.cors_origin}"}, allowedHeaders="*")

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
        return (datosPersonaCorrectos(persona)?personaService.guardarPersona(persona):null);
    } 
    
    private boolean datosPersonaCorrectos(Persona persona){
         return (((persona.getFoto()!=null && Utils.largoValidoString(persona.getFoto())) &&
                 (persona.getNombre()!=null && Utils.largoValidoString(persona.getNombre())) &&
                 (persona.getMail()!=null && Utils.largoValidoString(persona.getMail())) &&
                 (persona.getProfesion()!=null && Utils.largoValidoString(persona.getProfesion())) &&
                 (persona.getSobre_mi()!=null && Utils.largoValidoString(persona.getSobre_mi())) &&
                 (persona.getLinkedin()!=null && Utils.largoValidoString(persona.getLinkedin())) &&
                 (persona.getGithub()!=null && Utils.largoValidoString(persona.getGithub())) &&
                 (persona.getUbicacion()!=null && Utils.largoValidoString(persona.getUbicacion())) &&
                 (persona.getAnio()!=null)) 
                 && Utils.añoValido(persona.getAnio()) && Utils.mailValido(persona.getMail()));
    }

}
