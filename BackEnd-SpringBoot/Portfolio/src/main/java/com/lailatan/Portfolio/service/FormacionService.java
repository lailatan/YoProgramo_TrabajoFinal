
package com.lailatan.Portfolio.service;

import com.lailatan.Portfolio.model.Formacion;
import com.lailatan.Portfolio.repository.FormacionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormacionService implements IFormacionService{
     @Autowired
    private FormacionRepository formacionRepository;

    @Override
    public List<Formacion> traerFormacionesPorPersona(Integer id_persona) {
        return formacionRepository.findAllFormacionByPersona(id_persona);
    }

    @Override
    public void guardarFormacion(Formacion formacion) {
        formacionRepository.save(formacion);
    }

    @Override
    public void borrarFormacion(Integer id) {
        formacionRepository.deleteById(id);
    }

    @Override
    public Formacion traerFormacionPorId(Integer id) {
        return formacionRepository.findById(id).orElse(null);
    }
    
}
