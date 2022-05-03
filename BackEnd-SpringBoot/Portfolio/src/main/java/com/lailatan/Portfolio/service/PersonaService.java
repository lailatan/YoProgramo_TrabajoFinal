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
        /*
        if(persona.getId()!=null) {
            Persona personaExistente = personaRepository.findById(persona.getId()).orElse(null);
            if (personaExistente != null) {
                if (persona.getAnio()!= null) personaExistente.setAnio(persona.getAnio());
                if (persona.getFoto()!= null) personaExistente.setFoto(persona.getFoto());
                if (persona.getGithub()!= null) personaExistente.setGithub(persona.getGithub());
                if (persona.getLinkedin()!= null) personaExistente.setLinkedin(persona.getLinkedin());
                if (persona.getMail()!= null) personaExistente.setMail(persona.getMail());
                if (persona.getNombre()!= null) personaExistente.setNombre(persona.getNombre());
                if (persona.getProfesion()!= null) personaExistente.setProfesion(persona.getProfesion());
                if (persona.getSobre_mi()!= null) personaExistente.setSobre_mi(persona.getSobre_mi());
                if (persona.getUbicacion()!= null) personaExistente.setUbicacion(persona.getUbicacion());
                return personaRepository.save(personaExistente);
            }else persona.setId(null);
        }
        */
        return (persona.datosCorrectos()?personaRepository.save(persona):null);
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
