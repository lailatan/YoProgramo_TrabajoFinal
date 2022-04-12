import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Tecnologia } from 'src/app/objetos/tecnologia';
import { TecnologiaService } from 'src/app/services/tecnologia.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {TecnologiaModalComponent} from '../tecnologia-modal/tecnologia-modal.component';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {
  tecnologiasList: Tecnologia[];
  modoEdicion: boolean = false;
  Subscription?: Subscription;

  constructor( private uiService: UiService,
    private tecnologiaService:TecnologiaService,private modalService: NgbModal
  ) {
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
   }

  ngOnInit(): void {
    this.tecnologiaService.getTecnologias().subscribe(data => {
      this.tecnologiasList = data;
    });
    this.modoEdicion = this.uiService.esModoEdicion();
  }

  agregarDatos(){
    const modalRef = this.modalService.open(TecnologiaModalComponent);
    //modalRef.componentInstance.formacion = new Formacion();
    modalRef.result.then((result) => {
      if (result) {
        this.tecnologiaService.addTecnologia(result).subscribe(t => 
          this.tecnologiasList.push(t));
      }
    });
  }
  cambiarTecnologia(tecnologia:Tecnologia) {
    this.tecnologiaService.updateTecnologia(tecnologia).subscribe();
  }
  eliminarTecnologia(tecnologia:Tecnologia) {
    this.tecnologiaService.deleteTecnologia(tecnologia).subscribe( o => 
      this.tecnologiasList = this.tecnologiasList.filter(t => t.id !== tecnologia.id) 
      );
  }
}
