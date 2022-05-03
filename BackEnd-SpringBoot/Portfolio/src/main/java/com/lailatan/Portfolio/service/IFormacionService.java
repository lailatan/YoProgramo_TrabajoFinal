
package com.lailatan.Portfolio.service;

import com.lailatan.Portfolio.model.Formacion;
import java.util.List;

public interface IFormacionService {
    public List<Formacion> traerFormaciones();
    
    public Formacion guardarFormacion(Formacion formacion);
    
    public void borrarFormacion(Integer id);
    
    public Formacion traerFormacionPorId(Integer id);  
}
