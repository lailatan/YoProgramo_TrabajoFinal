package com.lailatan.Portfolio.controller;

import com.lailatan.Portfolio.model.Proyecto;
import com.lailatan.Portfolio.service.IProyectoService;
import com.lailatan.Portfolio.util.Utils;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("APIportfolio/proyecto")
@CrossOrigin(origins = {"${settings.cors_origin}"}, allowedHeaders="*")

public class ProyectoController {   
    @Autowired
    private IProyectoService proyectoService;

    @GetMapping("/find")
    @ResponseBody
    public List<Proyecto> traerProyectos() {
        return proyectoService.traerProyectos();
    } 

    @GetMapping("/find/{id}")
    @ResponseBody
    public Proyecto traerProyecto(@PathVariable Integer id) {
        return proyectoService.traerProyectoPorId(id);
    } 
    
    @PostMapping("/new")
    @ResponseBody
    public Proyecto crearProyecto(@RequestBody Proyecto proyecto) {
        return (datosProyectoCorrectos(proyecto)?proyectoService.guardarProyecto(proyecto):null);
    } 

    @PutMapping("/save")
    @ResponseBody
    public Proyecto guardarProyecto(@RequestBody Proyecto proyecto) {
        return (datosProyectoCorrectos(proyecto)?proyectoService.guardarProyecto(proyecto):null);
    } 
    
    @DeleteMapping("/delete/{id}")
    public void borrarProyecto(@PathVariable Integer id){
         proyectoService.borrarProyecto(id);
    }

    private boolean datosProyectoCorrectos(Proyecto proyecto){
         return ((proyecto.getImagen()!=null && Utils.largoValidoString(proyecto.getImagen())) &&
                 (proyecto.getLink()!=null && Utils.largoValidoString(proyecto.getLink())) &&
                 (proyecto.getIcono()!=null && Utils.largoValidoString(proyecto.getIcono())) &&
                 (proyecto.getNombre()!=null && Utils.largoValidoString(proyecto.getNombre())) &&
                 (proyecto.getDetalle()!=null && Utils.largoValidoString(proyecto.getDetalle())));
    }

}
