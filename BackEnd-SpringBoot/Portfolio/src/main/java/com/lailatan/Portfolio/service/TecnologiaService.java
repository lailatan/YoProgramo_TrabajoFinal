
package com.lailatan.Portfolio.service;

import com.lailatan.Portfolio.model.Tecnologia;
import com.lailatan.Portfolio.repository.TecnologiaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TecnologiaService implements ITecnologiaService{
     @Autowired
    private TecnologiaRepository tecnologiaRepository;

    @Override
    public List<Tecnologia> traerTecnologiasPorPersona(Integer id_persona) {
        //return tecnologiaRepository.findAllTecnologiaByPersona(id_persona);
        return null;
    }

    @Override
    public void guardarTecnologia(Tecnologia tecnologia) {
        tecnologiaRepository.save(tecnologia);
    }

    @Override
    public void guardarTecnologiaPersona(Integer id_tecnologia, Integer id_persona) {
        //TO DO
    }

    @Override
    public void borrarTecnologia(Integer id) {
        tecnologiaRepository.deleteById(id);
    }

    @Override
    public void borrarTecnologiaPersona(Integer id_tecnologia, Integer id_persona) {
        //TO DO
    }

    @Override
    public Tecnologia traerTecnologiaPorId(Integer id) {
        return tecnologiaRepository.findById(id).orElse(null);
    }
    
}
