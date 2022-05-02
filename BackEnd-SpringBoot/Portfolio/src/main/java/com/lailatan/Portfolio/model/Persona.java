package com.lailatan.Portfolio.model;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Persona {
     @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String foto;
    private String nombre;
    private String mail;
    private String profesion;
    private String sobre_mi;
    private String linkedin;
    private String github;
    private String ubicacion;
    private Integer anio;
     @OneToMany (mappedBy = "persona", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private List<Experiencia> experiencias;
     @OneToMany (mappedBy = "persona", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private List<Formacion> formaciones;
     @OneToMany (mappedBy = "persona", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private List<Proyecto> proyectos;
    @ManyToMany (cascade = CascadeType.ALL, fetch = FetchType.LAZY)
        @JoinTable (name="tecnologias_x_personas",
                    joinColumns = @JoinColumn (name="id_persona"),
                    inverseJoinColumns = @JoinColumn (name="id_tecnologia"))
    private List<Tecnologia> tecnologias;
    
    public Persona() {
    }

    public Persona(Integer id, String foto, String nombre, String mail, String profesion, String sobre_mi, String linkedin, String github, String ubicacion, Integer anio) {
        this.id = id;
        this.foto = foto;
        this.nombre = nombre;
        this.mail = mail;
        this.profesion = profesion;
        this.sobre_mi = sobre_mi;
        this.linkedin = linkedin;
        this.github = github;
        this.ubicacion = ubicacion;
        this.anio = anio;
    }

    public Persona(String foto, String nombre, String mail, String profesion, String sobre_mi, String linkedin, String github, String ubicacion, Integer anio) {
        this.foto = foto;
        this.nombre = nombre;
        this.mail = mail;
        this.profesion = profesion;
        this.sobre_mi = sobre_mi;
        this.linkedin = linkedin;
        this.github = github;
        this.ubicacion = ubicacion;
        this.anio = anio;
    }

    @Override
    public String toString() {
        return "Persona{" + "id=" + id + ", foto=" + foto + ", nombre=" + nombre + ", mail=" + mail + ", profesion=" + profesion + ", sobre_mi=" + sobre_mi + ", linkedin=" + linkedin + ", github=" + github + ", ubicacion=" + ubicacion + ", anio=" + anio + '}';
    }


}
