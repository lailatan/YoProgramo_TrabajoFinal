package com.lailatan.Portfolio.service;

import com.lailatan.Portfolio.model.Tecnologia;
import java.util.List;


public interface ITecnologiaService {
    public List<Tecnologia> traerTecnologias();
    
    public Tecnologia guardarTecnologia(Tecnologia tecnologia);
   
    public void borrarTecnologia(Integer id);
    
    public Tecnologia traerTecnologiaPorId(Integer id);  
  
}
