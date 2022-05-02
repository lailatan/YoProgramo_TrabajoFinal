package com.lailatan.Portfolio.repository;
import com.lailatan.Portfolio.model.Experiencia;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExperienciaRepository extends JpaRepository<Experiencia, Integer>{
    public List<Experiencia> findAllExperienciaByPersona(Integer id_persona);    
}
