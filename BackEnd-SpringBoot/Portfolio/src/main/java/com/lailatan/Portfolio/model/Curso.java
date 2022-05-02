package com.lailatan.Portfolio.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Curso {
    @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Integer id;
   private Integer anio;
   private String titulo;
   private String descripcion;   
    @ManyToOne
     @JoinColumn(name = "id_formacion")
   private Formacion formacion;

    public Curso() {
    }

    public Curso(Integer id, Integer anio, String titulo, String descripcion, Formacion formacion) {
        this.id = id;
        this.anio = anio;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.formacion = formacion;
    }

    public Curso(Integer anio, String titulo, String descripcion, Formacion formacion) {
        this.anio = anio;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.formacion = formacion;
    }

    @Override
    public String toString() {
        return "Curso{" + "id=" + id + ", anio=" + anio + ", titulo=" + titulo + ", descripcion=" + descripcion + ", formacion=" + formacion + '}';
    }

}
