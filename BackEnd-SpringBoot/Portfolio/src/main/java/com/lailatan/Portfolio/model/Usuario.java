package com.lailatan.Portfolio.model;

import com.lailatan.Portfolio.util.Utils;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Usuario {
    @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Integer id;
    @Column(name="mail",unique=true)
   private String mail;
   private String password;  
   private String token;

    public Usuario() {
    }

    public Usuario(Integer id, String mail, String password) {
        this.id = id;
        this.mail = mail;
        this.password = password;
    }

    public Usuario(String mail, String password) {
        this.mail = mail;
        this.password = password;
    }

    public Usuario(Integer id, String mail, String password, String token) {
        this.id = id;
        this.mail = mail;
        this.password = password;
        this.token = token;
    }
    
    @Override
    public String toString() {
        return "Usuario{" + "id=" + id + ", mail=" + mail + ", password=" + password + '}';
    }
}
