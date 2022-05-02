package com.lailatan.Portfolio.service;

import com.lailatan.Portfolio.model.Experiencia;
import java.util.List;

public interface IExperienciaService {
    public List<Experiencia> traerExperienciasPorPersona(Integer id_persona);
    
    public void guardarExperiencia(Experiencia experiencia);
    
    public void borrarExperiencia(Integer id);
    
    public Experiencia traerExperienciaPorId(Integer id);
  
}
