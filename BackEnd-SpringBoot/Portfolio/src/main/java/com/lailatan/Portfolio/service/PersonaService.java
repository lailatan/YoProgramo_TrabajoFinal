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
    public Persona guardarSobreMiPersona(Persona persona_web) {
        Persona persona_nueva = traerPersonaPorId(persona_web.getId());
        persona_nueva.setSobre_mi(persona_web.getSobre_mi());
        return guardarPersona(persona_nueva);
    }

    @Override
    public Persona guardarCabeceraPersona(Persona persona_web) {
        Persona persona_nueva = traerPersonaPorId(persona_web.getId());
        persona_nueva.setFoto(persona_web.getFoto());
        persona_nueva.setNombre(persona_web.getNombre());
        persona_nueva.setProfesion(persona_web.getProfesion());
        return guardarPersona(persona_nueva);
    }

    @Override
    public Persona guardarFooterPersona(Persona persona_web) {
        Persona persona_nueva = traerPersonaPorId(persona_web.getId());
        persona_nueva.setLinkedin(persona_web.getLinkedin());
        persona_nueva.setGithub(persona_web.getGithub());
        persona_nueva.setAnio(persona_web.getAnio());
        persona_nueva.setUbicacion(persona_web.getUbicacion());
        persona_nueva.setMail(persona_web.getMail());
        return guardarPersona(persona_nueva);
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
