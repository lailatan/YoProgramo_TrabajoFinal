package com.lailatan.Portfolio.service;

import com.lailatan.Portfolio.model.Usuario;
import java.util.List;

public interface IUsuarioService {
    public List<Usuario> traerUsuarios();
    
    public Usuario guardarUsuario(Usuario usuario);
    
    public void borrarUsuario(Integer id);
    
    public Usuario traerUsuarioPorId(Integer id);  
    
}
