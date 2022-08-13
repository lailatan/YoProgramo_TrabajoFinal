import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/objetos/persona';
import {PersonaService } from '../../services/persona.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EncabezadoModalComponent } from '../encabezado-modal/encabezado-modal.component';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  misDatos: Persona = {} as Persona;
  modoEdicion: boolean = false;
  Subscription?: Subscription;
  errorMsg: String="";
  waiting: boolean = true;

  constructor( private uiService: UiService, private  personaService: PersonaService,private modalService: NgbModal ) { 
      this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe({
      next: (value) => {this.misDatos=value; this.errorMsg="";this.waiting=false},
      error: (e) => {this.errorMsg = "Se ha producido un error" + 
      (e.message==0?".":": " + e.message + ". ");this.waiting=false}
});
      this.modoEdicion = this.uiService.esModoEdicion();
  }

  editarDatos(){
    const modalRef = this.modalService.open(EncabezadoModalComponent);
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
