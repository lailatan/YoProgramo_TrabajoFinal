package com.lailatan.Portfolio.service;

import com.lailatan.Portfolio.model.Persona;
import com.lailatan.Portfolio.model.Tecnologia;
import java.util.List;


public interface ITecnologiaService {
    public List<Tecnologia> traerTecnologiasPorPersona(Integer id_persona);
    
    public void guardarTecnologia(Tecnologia tecnologia);
   
    public void guardarTecnologiaPersona(Integer id_tecnologia,Integer id_persona);

    public void borrarTecnologia(Integer id);

    public void borrarTecnologiaPersona(Integer id_tecnologia,Integer id_persona);
    
    public Tecnologia traerTecnologiaPorId(Integer id);  
  
}
