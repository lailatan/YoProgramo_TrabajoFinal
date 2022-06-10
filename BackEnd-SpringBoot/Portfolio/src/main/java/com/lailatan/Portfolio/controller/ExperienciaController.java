package com.lailatan.Portfolio.controller;

import com.lailatan.Portfolio.model.Experiencia;
import com.lailatan.Portfolio.service.IExperienciaService;
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
@RequestMapping("APIportfolio/experiencia")
@CrossOrigin(origins = {"${settings.cors_origin}"}, allowedHeaders="*")

public class ExperienciaController {
    
    @Autowired
    private IExperienciaService experienciaService;

    @GetMapping("/find")
    @ResponseBody
    public List<Experiencia> traerExperiencias() {
        return experienciaService.traerExperiencias();
    } 
    
    @GetMapping("/find/{id}")
    @ResponseBody
    public Experiencia traerExperiencia(@PathVariable Integer id) {
        return experienciaService.traerExperienciaPorId(id);
    } 

    @PostMapping("/new")
    @ResponseBody
    public Experiencia crearExperiencia(@RequestBody Experiencia experiencia) {
        return (datosExperienciaCorrectos(experiencia)?experienciaService.guardarExperiencia(experiencia):null);
    } 

    @PutMapping("/save")
    @ResponseBody
    public Experiencia guardarExperiencia(@RequestBody Experiencia experiencia) {
        return (datosExperienciaCorrectos(experiencia)?experienciaService.guardarExperiencia(experiencia):null);
    } 
    
    @DeleteMapping("/delete/{id}")
    public void borrarExperiencia(@PathVariable Integer id){
         experienciaService.borrarExperiencia(id);
    }

    private boolean datosExperienciaCorrectos(Experiencia experiencia){
         return ((experiencia.getEmpresa()!=null && Utils.largoValidoString(experiencia.getEmpresa())) &&
                 (experiencia.getImagen()!=null && Utils.largoValidoString(experiencia.getImagen())) &&
                 (experiencia.getFechaDesde()!=null && Utils.yyyymmValido(experiencia.getFechaDesde())) &&
                 ((experiencia.getFechaHasta()!=null && Utils.yyyymmValido(experiencia.getFechaHasta())) || experiencia.getFechaHasta()==null || "".equals(experiencia.getFechaHasta())) &&
                 (experiencia.getCargo()!=null && Utils.largoValidoString(experiencia.getCargo())) &&
                 (experiencia.getDetalle()!=null && Utils.largoValidoString(experiencia.getDetalle())));
    }
    
}
