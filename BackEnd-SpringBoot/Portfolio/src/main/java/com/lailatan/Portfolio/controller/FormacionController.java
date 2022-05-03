package com.lailatan.Portfolio.controller;


import com.lailatan.Portfolio.model.Formacion;
import com.lailatan.Portfolio.service.IFormacionService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("/APIporfolio/formacion")
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
        return formacionService.guardarFormacion(formacion);
    } 

    @PutMapping("/save")
    @ResponseBody
    public Formacion guardarFormacion(@RequestBody Formacion formacion) {
        return formacionService.guardarFormacion(formacion);
    } 
    
    @DeleteMapping("/delete/{id}")
    public void borrarFormacion(@PathVariable Integer id){
        formacionService.borrarFormacion(id);
    }
    
}
