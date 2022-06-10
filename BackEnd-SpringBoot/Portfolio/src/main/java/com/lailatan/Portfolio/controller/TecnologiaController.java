package com.lailatan.Portfolio.controller;

import com.lailatan.Portfolio.model.Tecnologia;
import com.lailatan.Portfolio.service.ITecnologiaService;
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
@RequestMapping("APIportfolio/tecnologia")
@CrossOrigin(origins = {"${settings.cors_origin}"}, allowedHeaders="*")

public class TecnologiaController {
    
    @Autowired
    private ITecnologiaService tecnologiaService;

    @GetMapping("/find")
    @ResponseBody
    public List<Tecnologia> traerTecnologias() {
        return tecnologiaService.traerTecnologias();
    } 
    
    @GetMapping("/find/{id}")
    @ResponseBody
    public Tecnologia traerTecnologia(@PathVariable Integer id) {
        return tecnologiaService.traerTecnologiaPorId(id);
    } 

    @PostMapping("/new")
    @ResponseBody
    public Tecnologia crearTecnologia(@RequestBody Tecnologia tecnologia) {
        return (datosTecnologiaCorrectos(tecnologia)?tecnologiaService.guardarTecnologia(tecnologia):null);
    } 

    @PutMapping("/save")
    @ResponseBody
    public Tecnologia guardarTecnologia(@RequestBody Tecnologia tecnologia) {
        return (datosTecnologiaCorrectos(tecnologia)?tecnologiaService.guardarTecnologia(tecnologia):null);
    } 
    
    @DeleteMapping("/delete/{id}")
    public void borrarTecnologia(@PathVariable Integer id){
         tecnologiaService.borrarTecnologia(id);
    }

    public boolean datosTecnologiaCorrectos(Tecnologia tecnologia){
         return ((tecnologia.getImagen())!=null && Utils.largoValidoString(tecnologia.getImagen())) &&
                 (tecnologia.getNombre()!=null  && Utils.largoValidoString(tecnologia.getNombre())) &&
                 (tecnologia.getDetalle()!=null && Utils.largoValidoString(tecnologia.getDetalle()));
    }
    
}
