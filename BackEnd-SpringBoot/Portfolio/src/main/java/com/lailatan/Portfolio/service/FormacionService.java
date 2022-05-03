
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
    public List<Formacion> traerFormaciones() {
        return formacionRepository.findAll();
    }

    @Override
    public Formacion guardarFormacion(Formacion formacion) {
        return (formacion.datosCorrectos()?formacionRepository.save(formacion):null);
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
