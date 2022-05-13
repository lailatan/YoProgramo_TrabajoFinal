package com.lailatan.Portfolio.controller;

import com.lailatan.Portfolio.model.Usuario;
import com.lailatan.Portfolio.service.IUsuarioService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
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
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;
import java.util.stream.Collectors;


@RestController
@RequestMapping("APIportfolio/usuario")
@CrossOrigin(origins = {"${settings.cors_origin}"}, allowedHeaders="*")

public class UsuarioController {
    
    @Autowired
    private IUsuarioService usuarioService;

    @GetMapping("/find")
    @ResponseBody
    public List<Usuario> traerUsuarios() {
        return usuarioService.traerUsuarios();
    } 
    
    @GetMapping("/find/{id}")
    @ResponseBody
    public Usuario traerUsuario(@PathVariable Integer id) {
        return usuarioService.traerUsuarioPorId(id);
    } 

    @PostMapping("/new")
    @ResponseBody
    public Usuario crearUsuario(@RequestBody Usuario usuario) {
        return usuarioService.guardarUsuario(usuario);
    } 

    @PutMapping("/save")
    @ResponseBody
    public Usuario guardarUsuario(@RequestBody Usuario usuario) {
        return usuarioService.guardarUsuario(usuario);
    } 
    
    @DeleteMapping("/delete/{id}")
    public void borrarUsuario(@PathVariable Integer id){
         usuarioService.borrarUsuario(id);
    }
    
    @PostMapping("/login")
    @ResponseBody
    //public Usuario loginUsuario(@RequestParam("mail") String mail, @RequestParam("password") String password) {
    public Usuario loginUsuario(@RequestBody Usuario usuario) {
        return getJWTToken(usuario.getMail(),usuario.getPassword());
    } 
    
    private Usuario getJWTToken(String mail, String password) {
            
            Usuario usuario = usuarioService.validarUsuario(mail, password);
            if (usuario!=null) {
                String secretKey = "portfolio";
                List<GrantedAuthority> grantedAuthorities = AuthorityUtils
                                .commaSeparatedStringToAuthorityList("ROLE_USER");

                String token =  Jwts
                                .builder()
                                .setId("lailatan")
                                .setSubject(mail)
                                .claim("authorities",
                                                grantedAuthorities.stream()
                                                                .map(GrantedAuthority::getAuthority)
                                                                .collect(Collectors.toList()))
                                .setIssuedAt(new Date(System.currentTimeMillis()))
                                .setExpiration(new Date(System.currentTimeMillis() + 600000))
                                .signWith(SignatureAlgorithm.HS512,
                                                secretKey.getBytes()).compact();
                usuario.setToken("Bearer " + token);
            }
            return usuario;
    }    
}
