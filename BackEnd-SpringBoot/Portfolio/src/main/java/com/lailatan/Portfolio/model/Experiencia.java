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

    public Experiencia() {
    }

    public Experiencia(Integer id, String empresa, String imagen, String fecha_desde, String fecha_hasta, String cargo, String detalle) {
        this.id = id;
        this.empresa = empresa;
        this.imagen = imagen;
        this.fecha_desde = fecha_desde;
        this.fecha_hasta = fecha_hasta;
        this.cargo = cargo;
        this.detalle = detalle;
    }

    public Experiencia(String empresa, String imagen, String fecha_desde, String fecha_hasta, String cargo, String detalle) {
        this.empresa = empresa;
        this.imagen = imagen;
        this.fecha_desde = fecha_desde;
        this.fecha_hasta = fecha_hasta;
        this.cargo = cargo;
        this.detalle = detalle;
    }

    @Override
    public String toString() {
        return "Experiencia{" + "id=" + id + ", empresa=" + empresa + ", imagen=" + imagen + ", fecha_desde=" + fecha_desde + ", fecha_hasta=" + fecha_hasta + ", cargo=" + cargo + ", detalle=" + detalle + '}';
    }

    public boolean datosCorrectos(){
         return ((empresa!=null && Utils.largoValidoString(empresa)) &&
                 (imagen!=null && Utils.largoValidoString(imagen)) &&
                 (fecha_desde!=null && Utils.yyyymmValido(fecha_desde)) &&
                 (fecha_hasta!=null && Utils.yyyymmValido(fecha_hasta)) &&
                 (cargo!=null && Utils.largoValidoString(cargo)) &&
                 (detalle!=null && Utils.largoValidoString(detalle)));
    }
    
}
