
package com.lailatan.Portfolio.service;

import com.lailatan.Portfolio.model.Formacion;
import java.util.List;

public interface IFormacionService {
    public List<Formacion> traerFormacionesPorPersona(Integer id_persona);
    
    public void guardarFormacion(Formacion formacion);
    
    public void borrarFormacion(Integer id);
    
    public Formacion traerFormacionPorId(Integer id);  
}
