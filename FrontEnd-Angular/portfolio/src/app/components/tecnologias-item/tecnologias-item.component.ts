import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Tecnologia } from 'src/app/objetos/tecnologia';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {TecnologiaModalComponent} from '../tecnologia-modal/tecnologia-modal.component';
import { ConfirmacionModalComponent } from '../confirmacion-modal/confirmacion-modal.component';

@Component({
  selector: 'app-tecnologias-item',
  templateUrl: './tecnologias-item.component.html',
  styleUrls: ['./tecnologias-item.component.css']
})
export class TecnologiasItemComponent implements OnInit {
  @Input() miTecnologia: Tecnologia;
  @Output() onDeleteTecnologia :  EventEmitter<Tecnologia> = new EventEmitter();
  @Output() onUpdateTecnologia :  EventEmitter<Tecnologia> = new EventEmitter();
  modoEdicion: boolean = false;
  Subscription?: Subscription;

  constructor(private uiService: UiService,private modalService: NgbModal) { 
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
        this.miTecnologia=result;
        this.onUpdateTecnologia.emit(this.miTecnologia);
      }
    });
  }
  eliminarDatos(){
    const modalRef = this.modalService.open(ConfirmacionModalComponent);
    modalRef.componentInstance.texto = "¿Confirma borrar esta Tecnología?";
    modalRef.result.then((result) => {
      if (result===true) {
        this.onDeleteTecnologia.emit(this.miTecnologia);
      }
    });
  }
}