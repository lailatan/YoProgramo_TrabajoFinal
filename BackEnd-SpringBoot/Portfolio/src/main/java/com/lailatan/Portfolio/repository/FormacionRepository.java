package com.lailatan.Portfolio.repository;

import com.lailatan.Portfolio.model.Formacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormacionRepository extends JpaRepository<Formacion, Integer>{
    
}
