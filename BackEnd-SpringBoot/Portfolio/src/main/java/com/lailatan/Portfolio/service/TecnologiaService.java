
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
    public List<Tecnologia> traerTecnologias() {
        return tecnologiaRepository.findAll();
    }

    @Override
    public Tecnologia guardarTecnologia(Tecnologia tecnologia) {
        return (tecnologia.datosCorrectos()?tecnologiaRepository.save(tecnologia):null);
    }


    @Override
    public void borrarTecnologia(Integer id) {
        tecnologiaRepository.deleteById(id);
    }


    @Override
    public Tecnologia traerTecnologiaPorId(Integer id) {
        return tecnologiaRepository.findById(id).orElse(null);
    }
    
}
