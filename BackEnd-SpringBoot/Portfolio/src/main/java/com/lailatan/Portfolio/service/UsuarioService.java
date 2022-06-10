package com.lailatan.Portfolio.service;

import com.lailatan.Portfolio.model.Usuario;
import com.lailatan.Portfolio.repository.UsuarioRepository;
import com.lailatan.Portfolio.util.Utils;
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
    public Usuario guardarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @Override
    public void borrarUsuario(Integer id) {
        usuarioRepository.deleteById(id);
    }

    @Override
    public Usuario traerUsuarioPorId(Integer id) {
        return usuarioRepository.findById(id).orElse(null);
    }

    @Override
    public Usuario validarUsuario(String mail, String password) {
        Usuario usuario = usuarioRepository.findUsuarioByMail(mail);
        //System.out.println("USARIO: " + usuario);
        return (usuario!=null && 
                Utils.igualEncriptado(password, usuario.getPassword()))?usuario:null;
                //usuario.getPassword().equals(Utils.encriptar(password)))?usuario:null;
    }
    
}
