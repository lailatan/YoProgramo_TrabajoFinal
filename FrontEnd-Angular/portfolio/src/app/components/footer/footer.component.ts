import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/objetos/persona';
import {PersonaService } from '../../services/persona.service';
import {FooterModalComponent} from '../footer-modal/footer-modal.component';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor( private modalService: NgbModal, private uiService: UiService, 
                private personaService:PersonaService ,  private authService: AuthService) {
      this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value); 
      this.errorMsg="";
    }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe({
    next: (value) => {this.misDatos=value; this.errorMsg=""},
    error: (e) => {this.errorMsg = "Se ha producido un error" +  (e.message==0?". ":": " + e.message + ". ")}
});

  }

  editarDatos(){
    const modalRef = this.modalService.open(FooterModalComponent);
    modalRef.componentInstance.persona = this.misDatos;
    modalRef.result.then((result) => {
      if (result) {
        this.personaService.updatePersona(result).subscribe({
            next: (value) => {this.misDatos=value; this.errorMsg=""},
            error: (e) => {this.errorMsg = "Se ha producido un error" +  (e.message==0?". ":": " + e.message + ". ")}
          });
      }

      });
  }

  toggleLogIn() {
      const modalRef = this.modalService.open(LoginModalComponent);      
    }

  toggleLogOut(){
    this.uiService.cambiarModoEdicion();
    this.authService.logout();
  }
}
