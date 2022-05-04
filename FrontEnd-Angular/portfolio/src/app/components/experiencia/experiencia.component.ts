import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Experiencia } from 'src/app/objetos/experiencia';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ExperienciaModalComponent} from '../experiencia-modal/experiencia-modal.component';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList: Experiencia[];
  modoEdicion: boolean = false;
  Subscription?: Subscription;

  constructor( private uiService: UiService,
    private experienciaService:ExperienciaService ,private modalService: NgbModal
  ) { 
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
  }

  ngOnInit(): void {
    this.experienciaService.getExperiencias().subscribe(data => {
      this.experienciaList = data;
    });
    this.modoEdicion = this.uiService.esModoEdicion();
  }

  agregarDatos(){
    const modalRef = this.modalService.open(ExperienciaModalComponent);
    //modalRef.componentInstance.formacion = new Formacion();
    modalRef.result.then((result) => {
      if (result) {
        this.experienciaService.addExperiencia(result).subscribe(t => 
          this.experienciaList.push(t));
      }
    });
  }
  cambiarExperiencia(experiencia:Experiencia) {
    this.experienciaService.updateExperiencia(experiencia).subscribe();
  }
  eliminarExperiencia(experiencia:Experiencia) {
    this.experienciaService.deleteExperiencia(experiencia).subscribe( o => 
      this.experienciaList = this.experienciaList.filter(t => t.id !== experiencia.id) 
      );
  }

}
