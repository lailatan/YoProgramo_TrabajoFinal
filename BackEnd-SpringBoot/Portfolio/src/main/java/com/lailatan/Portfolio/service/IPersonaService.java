
package com.lailatan.Portfolio.service;

import com.lailatan.Portfolio.model.Persona;
import java.util.List;

public interface IPersonaService {
    
    public List<Persona> traerPersonas();
    
    public Persona guardarPersona(Persona persona);
    
    public Persona guardarSobreMiPersona(Persona persona);

    public Persona guardarCabeceraPersona(Persona persona);

    public Persona guardarFooterPersona(Persona persona);

    public void borrarPersona(Integer id);
    
    public Persona traerPersonaPorId(Integer id);

    public Persona traerPersona();
    
}
