package com.lailatan.Portfolio.service;

import com.lailatan.Portfolio.model.Proyecto;
import com.lailatan.Portfolio.repository.ProyectoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProyectoService implements IProyectoService{
     @Autowired
    private ProyectoRepository proyectoRepository;

    @Override
    public List<Proyecto> traerProyectosPorPersona(Integer id_persona) {
        return proyectoRepository.findAllProyectoByPersona(id_persona);
    }

    @Override
    public void guardarProyecto(Proyecto proyecto) {
        proyectoRepository.save(proyecto);
    }

    @Override
    public void borrarProyecto(Integer id) {
        proyectoRepository.deleteById(id);
    }

    @Override
    public Proyecto traerProyectoPorId(Integer id) {
        return proyectoRepository.findById(id).orElse(null);
    }
    
}
