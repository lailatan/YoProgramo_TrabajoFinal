import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Proyecto } from 'src/app/objetos/proyecto';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ProyectoModalComponent} from '../proyecto-modal/proyecto-modal.component';
import { ConfirmacionModalComponent } from '../confirmacion-modal/confirmacion-modal.component';

@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.css']
})
export class ProyectosItemComponent implements OnInit {
  @Input() miProyecto: Proyecto;
  @Output() onDeleteProyecto :  EventEmitter<Proyecto> = new EventEmitter();
  @Output() onUpdateProyecto :  EventEmitter<Proyecto> = new EventEmitter();
  modoEdicion: boolean = false;
  Subscription?: Subscription;

  constructor(private uiService: UiService,private modalService: NgbModal) { 
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
  }

  ngOnInit(): void {
    this.modoEdicion = this.uiService.esModoEdicion();
  }

  editarDatos(){
    const modalRef = this.modalService.open(ProyectoModalComponent);
    modalRef.componentInstance.proyecto = this.miProyecto;
    modalRef.result.then((result) => {
      if (result) {
        this.miProyecto=result;
        this.onUpdateProyecto.emit(this.miProyecto);
      }
    });
  }
  eliminarDatos(){
    const modalRef = this.modalService.open(ConfirmacionModalComponent);
    modalRef.componentInstance.texto = "¿Confirma borrar este Proyecto?";
    modalRef.result.then((result) => {
      if (result===true) {
        this.onDeleteProyecto.emit(this.miProyecto);
      }
    });
  }

}
