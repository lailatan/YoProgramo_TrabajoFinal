
package com.lailatan.Portfolio.service;

import com.lailatan.Portfolio.model.Curso;
import com.lailatan.Portfolio.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CursoService implements ICursoService{
     @Autowired
    private CursoRepository cursoRepository;

    @Override
    public Curso guardarCurso(Curso curso) {
        return cursoRepository.save(curso);
    }

    @Override
    public void borrarCurso(Integer id) {
        cursoRepository.deleteById(id);
    }

    @Override
    public Curso traerCursoPorId(Integer id) {
        return cursoRepository.findById(id).orElse(null);
    }
}
