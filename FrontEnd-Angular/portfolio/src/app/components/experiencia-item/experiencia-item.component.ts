import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Experiencia } from 'src/app/objetos/experiencia';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ExperienciaModalComponent} from '../experiencia-modal/experiencia-modal.component';
import { ConfirmacionModalComponent } from '../confirmacion-modal/confirmacion-modal.component';
import { ExperienciaService } from 'src/app/services/experiencia.service';


@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})

export class ExperienciaItemComponent implements OnInit {
  @Input() miExperiencia: Experiencia;
  @Output() onDeleteExperiencia :  EventEmitter<Experiencia> = new EventEmitter();

  modoEdicion: boolean = false;
  Subscription?: Subscription;
  texto_fecha_hasta: String;
  errorMsg: string="";
  errorId?:number = 0;

  constructor(private uiService: UiService,private modalService: NgbModal, private experienciaService:ExperienciaService) {
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
   }

  ngOnInit(): void {
    this.modoEdicion = this.uiService.esModoEdicion();
    this.texto_fecha_hasta=  ((this.miExperiencia.fechaHasta=="" || this.miExperiencia.fechaHasta==null)?
                                                              "Hoy":this.miExperiencia.fechaHasta);
  }

  editarDatos(){
    const modalRef = this.modalService.open(ExperienciaModalComponent);
    modalRef.componentInstance.experiencia = this.miExperiencia;
    modalRef.result.then((result) => {
      if (result) {
        this.experienciaService.updateExperiencia(result).subscribe({
          next: (value) => {this.miExperiencia=value; ; this.errorMsg=""; this.errorId=0;
                           this.texto_fecha_hasta= ((this.miExperiencia.fechaHasta=="" || this.miExperiencia.fechaHasta==null)?
                                                 "Hoy":this.miExperiencia.fechaHasta);},

          error: (e) => {this.errorMsg = "Se ha producido un error" +  (e.message==0?". ":": " + e.message + ". ");
                        this.errorId=this.miExperiencia.id}    
        });
          }
    });
  }

  eliminarDatos(){
    const modalRef = this.modalService.open(ConfirmacionModalComponent);
    modalRef.componentInstance.texto = "¿Confirma borrar esta Experiencia?";
    modalRef.result.then((result) => {
      if (result===true) {
        this.experienciaService.deleteExperiencia(this.miExperiencia).subscribe({
          next: (value) => {this.onDeleteExperiencia.emit(this.miExperiencia); this.errorMsg=""; this.errorId=0},
          error: (e) => {this.errorMsg = "Se ha producido un error" +  (e.message==0?". ":": " + e.message + ". ");
                        this.errorId=this.miExperiencia.id}         
        });
      }
    });
  }
}
