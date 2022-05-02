
package com.lailatan.Portfolio.repository;

import com.lailatan.Portfolio.model.Proyecto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProyectoRepository extends JpaRepository<Proyecto, Integer>{
    public List<Proyecto> findAllProyectoByPersona(Integer id_persona);    

}
