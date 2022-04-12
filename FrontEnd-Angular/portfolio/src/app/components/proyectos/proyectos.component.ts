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

  constructor(private uiService: UiService,
    private proyectoService:ProyectoService,private modalService: NgbModal
  ) { 
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
  }

  ngOnInit(): void {
    this.proyectoService.getProyectos().subscribe(data => {
      this.proyectosList = data;
    });
    this.modoEdicion = this.uiService.esModoEdicion();
  }
  agregarDatos(){
    const modalRef = this.modalService.open(ProyectoModalComponent);
    //modalRef.componentInstance.formacion = new Formacion();
    modalRef.result.then((result) => {
      if (result) {
        this.proyectoService.addProyecto(result).subscribe(t => 
          this.proyectosList.push(t));
      }
    });
  }
  cambiarProyecto(proyecto:Proyecto) {
    this.proyectoService.updateProyecto(proyecto).subscribe();
  }
  eliminarProyecto(proyecto:Proyecto) {
    this.proyectoService.deleteProyecto(proyecto).subscribe( o => 
      this.proyectosList = this.proyectosList.filter(t => t.id !== proyecto.id) 
      );
  }

}
