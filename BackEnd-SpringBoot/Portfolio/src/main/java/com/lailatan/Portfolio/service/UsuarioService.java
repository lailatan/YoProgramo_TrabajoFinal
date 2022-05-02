package com.lailatan.Portfolio.service;

import com.lailatan.Portfolio.model.Usuario;
import com.lailatan.Portfolio.repository.UsuarioRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService implements IUsuarioService{
     @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public List<Usuario> traerUsuarios() {
        return usuarioRepository.findAll();
    }

    @Override
    public void guardarUsuario(Usuario usuario) {
        usuarioRepository.save(usuario);
    }

    @Override
    public void borrarUsuario(Integer id) {
        usuarioRepository.deleteById(id);
    }

    @Override
    public Usuario traerUsuarioPorId(Integer id) {
        return usuarioRepository.findById(id).orElse(null);
    }
    
}
