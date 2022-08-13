import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Proyecto } from 'src/app/objetos/proyecto';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ProyectoModalComponent} from '../proyecto-modal/proyecto-modal.component';
import { ConfirmacionModalComponent } from '../confirmacion-modal/confirmacion-modal.component';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.css']
})
export class ProyectosItemComponent implements OnInit {
  @Input() miProyecto: Proyecto;
  @Output() onDeleteProyecto :  EventEmitter<Proyecto> = new EventEmitter();
  modoEdicion: boolean = false;
  Subscription?: Subscription;
  errorMsg: String="";
  errorId?:number = 0;

  constructor(private uiService: UiService,private modalService: NgbModal,private proyectoService:ProyectoService) { 
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
          this.proyectoService.updateProyecto(result).subscribe({
            next: (value) => {this.miProyecto=value; this.errorMsg=""; this.errorId=0},
            error: (e) => {this.errorMsg=this.uiService.manejarErroresBD(e);
                          this.errorId=this.miProyecto.id}    
          });
          }
    });
  }

  eliminarDatos(){
    const modalRef = this.modalService.open(ConfirmacionModalComponent);
    modalRef.componentInstance.texto = "¿Confirma borrar este Proyecto?";
    modalRef.result.then((result) => {
      if (result===true) {
        this.proyectoService.deleteProyecto(this.miProyecto).subscribe({
          next: (value) => {this.onDeleteProyecto.emit(this.miProyecto); this.errorMsg=""; this.errorId=0},
          error: (e) => {this.errorMsg=this.uiService.manejarErroresBD(e);
                        this.errorId=this.miProyecto.id}         
        });
      }
    });
  }

}
