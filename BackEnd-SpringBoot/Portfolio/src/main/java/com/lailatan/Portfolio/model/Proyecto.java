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
public class Proyecto {
    @Id 
     @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Integer id;
   private String imagen;
   private String link;
   private String icono;
   private String nombre;
   private String detalle;  
    @ManyToOne
     @JoinColumn(name = "id_persona")
   private Persona persona;

    public Proyecto() {
    }

    public Proyecto(Integer id, String imagen, String link, String icono, String nombre, String detalle, Persona persona) {
        this.id = id;
        this.imagen = imagen;
        this.link = link;
        this.icono = icono;
        this.nombre = nombre;
        this.detalle = detalle;
        this.persona = persona;
    }

    public Proyecto(String imagen, String link, String icono, String nombre, String detalle, Persona persona) {
        this.imagen = imagen;
        this.link = link;
        this.icono = icono;
        this.nombre = nombre;
        this.detalle = detalle;
        this.persona = persona;
    }

    @Override
    public String toString() {
        return "Proyecto{" + "id=" + id + ", imagen=" + imagen + ", link=" + link + ", icono=" + icono + ", nombre=" + nombre + ", detalle=" + detalle + ", persona=" + persona + '}';
    }

    
}
