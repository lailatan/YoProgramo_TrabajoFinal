package com.lailatan.Portfolio.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getProfesion() {
        return profesion;
    }

    public void setProfesion(String profesion) {
        this.profesion = profesion;
    }

    public String getSobre_mi() {
        return sobre_mi;
    }

    public void setSobre_mi(String sobre_mi) {
        this.sobre_mi = sobre_mi;
    }

    public String getLinkedin() {
        return linkedin;
    }

    public void setLinkedin(String linkedin) {
        this.linkedin = linkedin;
    }

    public String getGithub() {
        return github;
    }

    public void setGithub(String github) {
        this.github = github;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public Integer getAnio() {
        return anio;
    }

    public void setAnio(Integer anio) {
        this.anio = anio;
    }

}
