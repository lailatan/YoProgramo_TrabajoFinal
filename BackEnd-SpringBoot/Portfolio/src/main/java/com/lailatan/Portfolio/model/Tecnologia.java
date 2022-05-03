package com.lailatan.Portfolio.model;


import com.lailatan.Portfolio.Utils;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;


@Getter @Setter
@Entity
public class Tecnologia {
     @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Integer id;
   private String imagen;
   private String nombre;
   private String detalle;    

    public Tecnologia() {
    }

    public Tecnologia(Integer id, String imagen, String nombre, String detalle) {
        this.id = id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.detalle = detalle;
    }

    public Tecnologia(String imagen, String nombre, String detalle) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.detalle = detalle;
    }

    @Override
    public String toString() {
        return "Tecnologia{" + "id=" + id + ", imagen=" + imagen + ", nombre=" + nombre + ", detalle=" + detalle + '}';
    }
    public boolean datosCorrectos(){
         return ((imagen!=null && Utils.largoValidoString(imagen)) &&
                 (nombre!=null && Utils.largoValidoString(nombre)) &&
                 (detalle!=null && Utils.largoValidoString(detalle)));
    }

    
}
