import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Tecnologia } from 'src/app/objetos/tecnologia';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {TecnologiaModalComponent} from '../tecnologia-modal/tecnologia-modal.component';
import { ConfirmacionModalComponent } from '../confirmacion-modal/confirmacion-modal.component';
import { TecnologiaService } from 'src/app/services/tecnologia.service';

@Component({
  selector: 'app-tecnologias-item',
  templateUrl: './tecnologias-item.component.html',
  styleUrls: ['./tecnologias-item.component.css']
})
export class TecnologiasItemComponent implements OnInit {
  @Input() miTecnologia: Tecnologia;
  @Output() onDeleteTecnologia :  EventEmitter<Tecnologia> = new EventEmitter();
  modoEdicion: boolean = false;
  Subscription?: Subscription;
  errorMsg: string="";
  errorId?:number = 0;

  constructor(private uiService: UiService,private modalService: NgbModal,private tecnologiaService:TecnologiaService) { 
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
  }

  ngOnInit(): void {
    this.modoEdicion = this.uiService.esModoEdicion();
  }

  editarDatos(){
    const modalRef = this.modalService.open(TecnologiaModalComponent);
    modalRef.componentInstance.tecnologia = this.miTecnologia;
    modalRef.result.then((result) => {
      if (result) {
          this.tecnologiaService.updateTecnologia(result).subscribe({
            next: (value) => {this.miTecnologia=value; this.errorMsg=""; this.errorId=0},
            error: (e) => {this.errorMsg = "Se ha producido un error" +  (e.message==0?". ":": " + e.message + ". ");
                          this.errorId=this.miTecnologia.id}    
          });
      }
    });
  }


  eliminarDatos(){
    const modalRef = this.modalService.open(ConfirmacionModalComponent);
    modalRef.componentInstance.texto = "¿Confirma borrar esta Tecnología?";
    modalRef.result.then((result) => {
      if (result===true) {
        this.tecnologiaService.deleteTecnologia(this.miTecnologia).subscribe({
          next: (value) => {this.onDeleteTecnologia.emit(this.miTecnologia); this.errorMsg=""; this.errorId=0},
          error: (e) => {this.errorMsg = "Se ha producido un error" +  (e.message==0?". ":": " + e.message + ". ");
                        this.errorId=this.miTecnologia.id}         
        });
      }
    });
  }
}