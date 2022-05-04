package com.lailatan.Portfolio.controller;

import com.lailatan.Portfolio.model.Usuario;
import com.lailatan.Portfolio.service.IUsuarioService;
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
@RequestMapping("/APIportfolio/auth")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*")
public class UsuarioController {
    
    @Autowired
    private IUsuarioService usuarioService;

    @GetMapping("/usuario/find")
    @ResponseBody
    public List<Usuario> traerUsuarios() {
        return usuarioService.traerUsuarios();
    } 
    
    @GetMapping("/usuario/find/{id}")
    @ResponseBody
    public Usuario traerUsuario(@PathVariable Integer id) {
        return usuarioService.traerUsuarioPorId(id);
    } 

    @PostMapping("/usuario/new")
    @ResponseBody
    public Usuario crearUsuario(@RequestBody Usuario usuario) {
        return usuarioService.guardarUsuario(usuario);
    } 

    @PutMapping("/usuario/save")
    @ResponseBody
    public Usuario guardarUsuario(@RequestBody Usuario usuario) {
        return usuarioService.guardarUsuario(usuario);
    } 
    
    @DeleteMapping("/usuario/delete/{id}")
    public void borrarUsuario(@PathVariable Integer id){
        usuarioService.borrarUsuario(id);
    }

    @PostMapping("/login")
    @ResponseBody
    public Usuario loginUsuario(@RequestBody Usuario usuario) {
        return usuarioService.guardarUsuario(usuario);
    } 
    
}
