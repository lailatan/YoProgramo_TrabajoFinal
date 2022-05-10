package com.lailatan.Portfolio.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.lailatan.Portfolio.Utils;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
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
   @JsonManagedReference
    @OneToMany (mappedBy = "formacion", cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    @OrderBy("anio DESC")
   private List<Curso> cursos;

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
    public boolean datosCorrectos(){
         return ((escuela!=null && Utils.largoValidoString(escuela)) &&
                 (imagen!=null && Utils.largoValidoString(imagen)));
    }

}
