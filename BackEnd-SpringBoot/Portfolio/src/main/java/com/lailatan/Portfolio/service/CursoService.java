
package com.lailatan.Portfolio.service;

import com.lailatan.Portfolio.model.Curso;
import com.lailatan.Portfolio.repository.CursoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CursoService implements ICursoService{
     @Autowired
    private CursoRepository cursoRepository;

    @Override
    public List<Curso> traerCursosPorFormacion(Integer id_formacion) {
        return cursoRepository.findAllCursoByFormacion(id_formacion);
    }

    @Override
    public void guardarCurso(Curso curso) {
        cursoRepository.save(curso);
    }

    @Override
    public void borrarCurso(Integer id) {
        cursoRepository.deleteById(id);
    }

    @Override
    public Curso traerCursoPorId(Integer id) {
        return cursoRepository.findById(id).orElse(null);
    }
    
    /* SAVE
           if(character.getCharacter_id()!=null) {
            Character personajeExistente = characterRepository.findById(character.getCharacter_id()).orElse(null);
            if (personajeExistente != null) {
                if (character.getName() != null) personajeExistente.setName(character.getName());
                if (character.getAge() != null) personajeExistente.setAge(character.getAge());
                if (character.getImage_url() != null) personajeExistente.setImage_url(character.getImage_url());
                if (character.getStory() != null) personajeExistente.setStory(character.getStory());
                if (character.getWeight() != null) personajeExistente.setWeight(character.getWeight());
                return characterRepository.save(personajeExistente);
            }else character.setCharacter_id(null);
            }
            return (character.estoyBienFormado())?characterRepository.save(character):null;

        public boolean estoyBienFormado(){
            return (name!=null && age!=null && image_url !=null && story!=null && weight!=null);
        }

    */
}
