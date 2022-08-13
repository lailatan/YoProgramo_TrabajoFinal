import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Formacion } from 'src/app/objetos/formacion';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormacionModalComponent} from '../formacion-modal/formacion-modal.component';
import { ConfirmacionModalComponent } from '../confirmacion-modal/confirmacion-modal.component';
import { FormacionService } from 'src/app/services/formacion.service';

@Component({
  selector: 'app-formacion-item',
  templateUrl: './formacion-item.component.html',
  styleUrls: ['./formacion-item.component.css']
})
export class FormacionItemComponent implements OnInit {
  @Input() miFormacion: Formacion;
  @Output() onDeleteFormacion :  EventEmitter<Formacion> = new EventEmitter();
  modoEdicion: boolean = false;
  Subscription?: Subscription;
  errorMsg: String="";
  errorId?:number = 0;

  constructor( private uiService: UiService,private modalService: NgbModal,private formacionService:FormacionService) {
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
   }

  ngOnInit(): void {
    this.modoEdicion = this.uiService.esModoEdicion();
  }

  prepararDatos(datos:string) {
    if (datos!==undefined && datos!==null && datos!==""){
      datos = datos.split("\n").join("<br />");
    }
    return datos;
  }

  editarDatos(){
    const modalRef = this.modalService.open(FormacionModalComponent);
    modalRef.componentInstance.formacion = this.miFormacion;
    modalRef.result.then((result) => {
      if (result) {
        this.formacionService.updateFormacion(result).subscribe({
          next: (value) => {this.miFormacion=value; this.errorMsg=""; this.errorId=0},
          error: (e) => {this.errorMsg=this.uiService.manejarErroresBD(e);
                        this.errorId=this.miFormacion.id}    
        });
          }
    });
  }
  eliminarDatos(){
    const modalRef = this.modalService.open(ConfirmacionModalComponent);
    modalRef.componentInstance.texto = "¿Confirma borrar esta Formación?";
    modalRef.result.then((result) => {
      if (result===true) {
        this.formacionService.deleteFormacion(this.miFormacion).subscribe({
          next: (value) => {this.onDeleteFormacion.emit(this.miFormacion); this.errorMsg=""; this.errorId=0},
          error: (e) => {this.errorMsg=this.uiService.manejarErroresBD(e);
                        this.errorId=this.miFormacion.id}         
        });
      }
    });
  }

}
