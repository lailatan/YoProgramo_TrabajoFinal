package com.lailatan.Portfolio.service;

import com.lailatan.Portfolio.model.Experiencia;
import com.lailatan.Portfolio.repository.ExperienciaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExperienciaService implements IExperienciaService{
     @Autowired
    private ExperienciaRepository experienciaRepository;

    @Override
    public List<Experiencia> traerExperiencias() {
        //return experienciaRepository.findAll();
        return experienciaRepository.findAllExperienciaByOrderByFechaDesdeDesc();
    }

    @Override
    public Experiencia guardarExperiencia(Experiencia experiencia) {
        return (experiencia.datosCorrectos()?experienciaRepository.save(experiencia):null);
    }

    @Override
    public void borrarExperiencia(Integer id) {
        experienciaRepository.deleteById(id);
    }

    @Override
    public Experiencia traerExperienciaPorId(Integer id) {
        return experienciaRepository.findById(id).orElse(null);
    }
    
}
