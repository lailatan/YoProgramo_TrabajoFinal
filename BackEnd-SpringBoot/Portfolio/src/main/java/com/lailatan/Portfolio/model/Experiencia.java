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
public class Experiencia {
    @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Integer id;
   private String empresa;
   private String imagen;
   private String fecha_desde;
   private String fecha_hasta;
   private String cargo;
   private String detalle;   
    @ManyToOne
     @JoinColumn(name = "id_persona")
   private Persona persona;

    public Experiencia() {
    }

    public Experiencia(Integer id, String empresa, String imagen, String fecha_desde, String fecha_hasta, String cargo, String detalle, Persona persona) {
        this.id = id;
        this.empresa = empresa;
        this.imagen = imagen;
        this.fecha_desde = fecha_desde;
        this.fecha_hasta = fecha_hasta;
        this.cargo = cargo;
        this.detalle = detalle;
        this.persona = persona;
    }

    public Experiencia(String empresa, String imagen, String fecha_desde, String fecha_hasta, String cargo, String detalle, Persona persona) {
        this.empresa = empresa;
        this.imagen = imagen;
        this.fecha_desde = fecha_desde;
        this.fecha_hasta = fecha_hasta;
        this.cargo = cargo;
        this.detalle = detalle;
        this.persona = persona;
    }

    @Override
    public String toString() {
        return "Experiencia{" + "id=" + id + ", empresa=" + empresa + ", imagen=" + imagen + ", fecha_desde=" + fecha_desde + ", fecha_hasta=" + fecha_hasta + ", cargo=" + cargo + ", detalle=" + detalle + ", persona=" + persona + '}';
    }

    
}
