
package com.lailatan.Portfolio.repository;

import com.lailatan.Portfolio.model.Curso;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Integer>{
    public List<Curso> findAllCursoByFormacion(Integer id_formacion);
}
