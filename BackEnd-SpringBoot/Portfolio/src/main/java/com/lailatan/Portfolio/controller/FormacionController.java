package com.lailatan.Portfolio.controller;


import com.lailatan.Portfolio.model.Curso;
import com.lailatan.Portfolio.model.Formacion;
import com.lailatan.Portfolio.service.IFormacionService;
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
@RequestMapping("APIportfolio/formacion")
@CrossOrigin(origins = {"${settings.cors_origin}"}, allowedHeaders="*")

public class FormacionController {
    
    @Autowired
    private IFormacionService formacionService;

    @GetMapping("/find")
    @ResponseBody
    public List<Formacion> traerFormaciones() {
        return formacionService.traerFormaciones();
    } 

    @GetMapping("/find/{id}")
    @ResponseBody
    public Formacion traerFormacion(@PathVariable Integer id) {
        return formacionService.traerFormacionPorId(id);
    } 

    @PostMapping("/new")
    @ResponseBody
    public Formacion crearFormacion(@RequestBody Formacion formacion) {
        return (datosFormacionCorrectos(formacion)?formacionService.guardarFormacion(formacion):null);
        //return formacionService.guardarFormacion(formacion);
    } 

    @PutMapping("/save")
    @ResponseBody
    public Formacion guardarFormacion(@RequestBody Formacion formacion) {
        return (datosFormacionCorrectos(formacion)?formacionService.guardarFormacion(formacion):null);
    } 
    
    @DeleteMapping("/delete/{id}")
    public void borrarFormacion(@PathVariable Integer id){
         formacionService.borrarFormacion(id);
    }
    
    private boolean datosFormacionCorrectos(Formacion formacion){
        Boolean validoCursos=true;
        int i=0;
        
        while (validoCursos && formacion.getCursos().size()>i){
            validoCursos = datosCursoCorrectos(formacion.getCursos().get(i));
            i++;
        }      
        return validoCursos 
                && ((formacion.getEscuela()!=null && Utils.largoValidoString(formacion.getEscuela())) 
                &&  (formacion.getImagen()!=null && Utils.largoValidoString(formacion.getImagen())));
    }
    
    private boolean datosCursoCorrectos(Curso curso){            
        return (((curso.getTitulo()!=null && Utils.largoValidoString(curso.getTitulo())) 
               && ((curso.getDescripcion()!=null && Utils.largoValidoString(curso.getDescripcion())) || 
                    (curso.getDescripcion()==null) || ("".equals(curso.getDescripcion()))) 
                && (curso.getAnio()!=null)) 
                && Utils.añoValido(curso.getAnio()));
    }

}
