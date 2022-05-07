package com.lailatan.Portfolio.repository;

import com.lailatan.Portfolio.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario , Integer>{
    Usuario findUsuarioByMail(String mail);
}
