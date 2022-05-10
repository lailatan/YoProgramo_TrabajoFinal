import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Proyecto } from 'src/app/objetos/proyecto';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ProyectoModalComponent} from '../proyecto-modal/proyecto-modal.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectosList: Proyecto[];
  modoEdicion: boolean = false;
  Subscription?: Subscription;
  errorMsg: String="";

  constructor(private uiService: UiService,
    private proyectoService:ProyectoService,private modalService: NgbModal) { 
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
  }

  ngOnInit(): void {
    this.proyectoService.getProyectos().subscribe({
      next: (value) => {this.proyectosList=value; this.errorMsg=""},
      error: (e) => {this.errorMsg = "Se ha producido un error" +  (e.message==0?". ":": " + e.message + ". ")}   });
    this.modoEdicion = this.uiService.esModoEdicion();
  }
  agregarDatos(){
    const modalRef = this.modalService.open(ProyectoModalComponent);
    modalRef.result.then((result) => {
      if (result) {
        this.proyectoService.addProyecto(result).subscribe({
          next: (value) => {this.proyectosList.push(value); this.errorMsg=""},
          error: (e) => {this.errorMsg = "Se ha producido un error" +  (e.message==0?". ":": " + e.message + ". ")}        });
      }
    });
  }

  eliminarProyecto(proyecto:Proyecto) {
        this.proyectosList = this.proyectosList.filter(t => t.id !== proyecto.id);
  }

}
