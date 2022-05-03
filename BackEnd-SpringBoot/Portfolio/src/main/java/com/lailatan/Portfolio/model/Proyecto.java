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
public class Proyecto {
    @Id 
     @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Integer id;
   private String imagen;
   private String link;
   private String icono;
   private String nombre;
   private String detalle;  

    public Proyecto() {
    }

    public Proyecto(Integer id, String imagen, String link, String icono, String nombre, String detalle) {
        this.id = id;
        this.imagen = imagen;
        this.link = link;
        this.icono = icono;
        this.nombre = nombre;
        this.detalle = detalle;
    }

    public Proyecto(String imagen, String link, String icono, String nombre, String detalle) {
        this.imagen = imagen;
        this.link = link;
        this.icono = icono;
        this.nombre = nombre;
        this.detalle = detalle;
    }

    @Override
    public String toString() {
        return "Proyecto{" + "id=" + id + ", imagen=" + imagen + ", link=" + link + ", icono=" + icono + ", nombre=" + nombre + ", detalle=" + detalle + '}';
    }

    public boolean datosCorrectos(){
         return ((imagen!=null && Utils.largoValidoString(imagen)) &&
                 (link!=null && Utils.largoValidoString(link)) &&
                 (icono!=null && Utils.largoValidoString(icono)) &&
                 (nombre!=null && Utils.largoValidoString(nombre)) &&
                 (detalle!=null && Utils.largoValidoString(detalle)));
    }
    
}
