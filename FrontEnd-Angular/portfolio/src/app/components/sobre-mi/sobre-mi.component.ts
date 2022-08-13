import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { catchError, of, Subscription } from 'rxjs';
import { Persona } from 'src/app/objetos/persona';
import {PersonaService } from '../../services/persona.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {SobreMiModalComponent} from '../sobre-mi-modal/sobre-mi-modal.component';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  misDatos: Persona = {    
          foto: "",
          nombre: "",
          ubicacion: "",
          mail: "",
          anio:0,
          profesion: "",
          sobre_mi: "",
          linkedin: "",
          github: ""};
  modoEdicion: boolean = false;
  Subscription?: Subscription;
  errorMsg: String;
  waiting: boolean = true;
  
  constructor(private uiService: UiService, private personaService:PersonaService,private modalService: NgbModal) { 
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
    const modalRef = this.modalService.open(SobreMiModalComponent);
    modalRef.componentInstance.persona = this.misDatos;
    modalRef.result.then((result) => {
      if (result) {
        this.personaService.updatePersona(result).subscribe({
            next: (value) => {this.misDatos=value; this.errorMsg=""},
            error: (e) => {this.errorMsg=this.uiService.manejarErroresBD(e)}
          });
      }
    });
  }
}
