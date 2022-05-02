package com.lailatan.Portfolio.service;

import com.lailatan.Portfolio.model.Curso;
import java.util.List;

public interface ICursoService {
    public List<Curso> traerCursosPorFormacion(Integer id_formacion);
    
    public void guardarCurso(Curso curso);
    
    public void borrarCurso(Integer id);
    
    public Curso traerCursoPorId(Integer id);
  
}
