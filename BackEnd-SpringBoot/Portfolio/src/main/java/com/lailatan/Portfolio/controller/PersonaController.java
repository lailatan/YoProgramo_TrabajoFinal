
package com.lailatan.Portfolio.controller;

import com.lailatan.Portfolio.model.Persona;
import com.lailatan.Portfolio.service.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/porfolio")
public class PersonaController {
     @Autowired
    private IPersonaService personaService;

    @GetMapping("/{id}")
    @ResponseBody
    public Persona traerPersona(@PathVariable Integer id) {
        return personaService.traerPersonaPorId(id);
    } 
}
