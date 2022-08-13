import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/objetos/persona';
import {PersonaService } from '../../services/persona.service';
import {FooterModalComponent} from '../footer-modal/footer-modal.component';
import { AuthService } from 'src/app/services/auth.service';
import { ConfirmacionModalComponent } from '../confirmacion-modal/confirmacion-modal.component';
import { AvisoModalComponent } from '../aviso-modal/aviso-modal.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  misDatos: Persona = {    
    foto: "",
    nombre: "",
    ubicacion: "",
    mail: "",
    anio: undefined,
    profesion: "",
    sobre_mi: "",
    linkedin: "",
    github: ""};
  modoEdicion: boolean = false;
  Subscription?: Subscription;
  errorMsg: String;
  waiting: boolean = true;
  
  constructor( private modalService: NgbModal, private uiService: UiService, 
                private personaService:PersonaService ,  private authService: AuthService) {
      this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value); 
      this.errorMsg="";
    }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe({
    next: (value) => {this.misDatos=value; this.errorMsg="";this.waiting=false},
    error: (e) => {this.errorMsg = "Se ha producido un error" +  (e.message==0?". ":": " + e.message + ". ");this.waiting=false}
    });
    this.modoEdicion = this.uiService.esModoEdicion();
  }

  editarDatos(){
    const modalRef = this.modalService.open(FooterModalComponent);
    modalRef.componentInstance.persona = this.misDatos;
    modalRef.result.then((result) => {
      if (result) {
        this.personaService.updateFooterPersona(result).subscribe({
            next: (value) => {this.misDatos=value; this.errorMsg=""},
            //error: (e) => { this.errorMsg = "Se ha producido un error" +  (e.message==0?". ":": " + e.message + ". ")}
            error: (e) => { this.errorMsg=this.uiService.manejarErroresBD(e)}
        });
      }
    });
  }

  toggleLogIn() {
      const modalRef = this.modalService.open(LoginModalComponent);      
    }

  //toggleLogOut(){
  //  this.uiService.cambiarModoEdicion();
  //  this.authService.logout();
  //}

  toggleLogOut(){
    const modalRef = this.modalService.open(ConfirmacionModalComponent);
    modalRef.componentInstance.texto = "¿Confirma cerrar la Sesión?";
    modalRef.result.then((result) => {
      if (result===true) {
        this.uiService.cambiarModoEdicion();
        this.authService.logout();
      }
    });
  }

}
