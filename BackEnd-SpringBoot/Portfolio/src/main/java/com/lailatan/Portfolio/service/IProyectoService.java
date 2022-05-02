package com.lailatan.Portfolio.service;

import com.lailatan.Portfolio.model.Proyecto;
import java.util.List;


public interface IProyectoService {
    public List<Proyecto> traerProyectosPorPersona(Integer id_persona);
    
    public void guardarProyecto(Proyecto proyecto);
    
    public void borrarProyecto(Integer id);
    
    public Proyecto traerProyectoPorId(Integer id);  

}
