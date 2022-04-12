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

  constructor( private uiService: UiService, private  personaService: PersonaService,private modalService: NgbModal ) { 
      this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(datos => 
      this.misDatos = datos
      );
  }

  editarDatos(){
    const modalRef = this.modalService.open(EncabezadoModalComponent);
    modalRef.componentInstance.persona = this.misDatos;
    modalRef.result.then((result) => {
      if (result) {
        this.misDatos=result;
        this.personaService.updatePersona(this.misDatos).subscribe();
      }
    });
  }
}
