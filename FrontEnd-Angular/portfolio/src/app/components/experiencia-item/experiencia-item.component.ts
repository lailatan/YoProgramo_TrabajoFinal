import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Experiencia } from 'src/app/objetos/experiencia';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ExperienciaModalComponent} from '../experiencia-modal/experiencia-modal.component';
import { ConfirmacionModalComponent } from '../confirmacion-modal/confirmacion-modal.component';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {
  @Input() miExperiencia: Experiencia;
  @Output() onDeleteExperiencia :  EventEmitter<Experiencia> = new EventEmitter();
  @Output() onUpdateExperiencia :  EventEmitter<Experiencia> = new EventEmitter();
  modoEdicion: boolean = false;
  Subscription?: Subscription;
  texto_fecha_hasta: String;
  
  constructor(private uiService: UiService,private modalService: NgbModal) {
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
   }

  ngOnInit(): void {
    this.modoEdicion = this.uiService.esModoEdicion();
    this.texto_fecha_hasta= ((this.miExperiencia.fecha_hasta=="" || this.miExperiencia.fecha_hasta==null)?"Hoy":this.miExperiencia.fecha_hasta);
  }

  editarDatos(){
    const modalRef = this.modalService.open(ExperienciaModalComponent);
    modalRef.componentInstance.experiencia = this.miExperiencia;
    modalRef.result.then((result) => {
      if (result) {
        this.miExperiencia=result;
        this.onUpdateExperiencia.emit(this.miExperiencia);
      }
    });
  }
  eliminarDatos(){
    const modalRef = this.modalService.open(ConfirmacionModalComponent);
    modalRef.componentInstance.texto = "¿Confirma borrar esta Experiencia?";
    modalRef.result.then((result) => {
      if (result===true) {
        this.onDeleteExperiencia.emit(this.miExperiencia);
      }
    });
  }

}
