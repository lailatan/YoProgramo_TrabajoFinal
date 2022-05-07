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
  misDatos: Persona;
  modoEdicion: boolean = false;
  Subscription?: Subscription;

  constructor( private modalService: NgbModal, private uiService: UiService, 
                private personaService:PersonaService ,  private authService: AuthService,) {
      this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value); }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {
       this.misDatos = data;
    });
  }

  editarDatos(){
    const modalRef = this.modalService.open(FooterModalComponent);
    modalRef.componentInstance.persona = this.misDatos;
    modalRef.result.then((result) => {
      if (result) {
        this.misDatos=result;
        this.personaService.updatePersona(this.misDatos).subscribe();
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
