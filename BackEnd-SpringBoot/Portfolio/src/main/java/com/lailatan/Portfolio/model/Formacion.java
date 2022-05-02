package com.lailatan.Portfolio.model;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Formacion {
    @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Integer id;
   private String escuela;
   private String imagen;    
    @OneToMany (mappedBy = "formacion", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
   private List<Curso> cursos;
    @ManyToOne
     @JoinColumn(name = "id_persona")
   private Persona persona;
    

    public Formacion() {
    }

    public Formacion(Integer id, String escuela, String imagen) {
        this.id = id;
        this.escuela = escuela;
        this.imagen = imagen;
    }

    public Formacion(String escuela, String imagen) {
        this.escuela = escuela;
        this.imagen = imagen;
    }

    @Override
    public String toString() {
        return "Formacion{" + "id=" + id + ", escuela=" + escuela + ", imagen=" + imagen + '}';
    }

}
