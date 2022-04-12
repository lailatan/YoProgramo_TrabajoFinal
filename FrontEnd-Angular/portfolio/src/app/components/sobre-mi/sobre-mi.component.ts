import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
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
  misDatos: Persona;
  modoEdicion: boolean = false;
  Subscription?: Subscription;

  constructor(private uiService: UiService, private personaService:PersonaService,private modalService: NgbModal) { 
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {
      this.misDatos = data;
    });
    this.modoEdicion = this.uiService.esModoEdicion();
  }

  editarDatos(){
    const modalRef = this.modalService.open(SobreMiModalComponent);
    modalRef.componentInstance.persona = this.misDatos;
    modalRef.result.then((result) => {
      if (result) {
        this.misDatos=result;
        this.personaService.updatePersona(this.misDatos).subscribe();
      }
    });
  }
}
