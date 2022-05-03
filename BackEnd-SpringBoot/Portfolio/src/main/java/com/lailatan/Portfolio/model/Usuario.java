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
public class Usuario {
    @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Integer id;
   private String mail;
   private String password;    

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

    @Override
    public String toString() {
        return "Usuario{" + "id=" + id + ", mail=" + mail + ", password=" + password + '}';
    }
    public boolean datosCorrectos(){
         return (((mail!=null && Utils.largoValidoString(mail)) &&
                 (password!=null && Utils.largoValidoString(password))) 
                 && Utils.mailValido(mail));
    }

}
