package com.lailatan.Portfolio.service;

import com.lailatan.Portfolio.model.Curso;

public interface ICursoService {
    
    public Curso guardarCurso(Curso curso);
    
    public void borrarCurso(Integer id);
    
    public Curso traerCursoPorId(Integer id);
  
}
