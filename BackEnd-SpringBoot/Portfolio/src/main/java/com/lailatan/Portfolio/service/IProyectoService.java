package com.lailatan.Portfolio.service;

import com.lailatan.Portfolio.model.Proyecto;
import java.util.List;


public interface IProyectoService {
    public List<Proyecto> traerProyectos();
    
    public Proyecto guardarProyecto(Proyecto proyecto);
    
    public void borrarProyecto(Integer id);
    
    public Proyecto traerProyectoPorId(Integer id);  

}
