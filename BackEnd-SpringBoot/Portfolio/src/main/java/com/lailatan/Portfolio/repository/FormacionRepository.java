package com.lailatan.Portfolio.repository;

import com.lailatan.Portfolio.model.Formacion;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormacionRepository extends JpaRepository<Formacion, Integer>{
    List<Formacion> findAllFormacionByOrderByIdDesc();
    
}
