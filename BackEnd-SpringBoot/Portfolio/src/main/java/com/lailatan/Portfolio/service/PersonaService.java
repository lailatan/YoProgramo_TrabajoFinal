package com.lailatan.Portfolio.service;

import com.lailatan.Portfolio.model.Persona;
import com.lailatan.Portfolio.repository.PersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaService implements IPersonaService{
     @Autowired
    private PersonaRepository personaRepository;

    @Override
    public List<Persona> traerPersonas() {
        return personaRepository.findAll();
    }

    @Override
    public Persona guardarPersona(Persona persona) {
        return personaRepository.save(persona);
    }

    @Override
    public void borrarPersona(Integer id) {
        personaRepository.deleteById(id);
    }

    @Override
    public Persona traerPersonaPorId(Integer id) {
        return personaRepository.findById(id).orElse(null);
    }

    @Override
    public Persona traerPersona() {
        List<Persona> personas = personaRepository.findAll();
        return (personas==null?null:personas.get(0));
    }
    
}
