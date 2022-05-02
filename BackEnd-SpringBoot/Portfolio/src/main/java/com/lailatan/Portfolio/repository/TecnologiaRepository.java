
package com.lailatan.Portfolio.repository;

import com.lailatan.Portfolio.model.Tecnologia;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TecnologiaRepository extends JpaRepository<Tecnologia, Integer>{
    //public List<Tecnologia> findAllTecnologiaByPersona(Integer id_persona);    
    
}
