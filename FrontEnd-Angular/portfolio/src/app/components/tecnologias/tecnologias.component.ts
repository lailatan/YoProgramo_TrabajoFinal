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
  errorMsg: String="";
  waiting: boolean = true;

  constructor( private uiService: UiService,
    private tecnologiaService:TecnologiaService,private modalService: NgbModal) {
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
   }

  ngOnInit(): void {
    this.tecnologiaService.getTecnologias().subscribe({
      next: (value) => {this.tecnologiasList = value; this.errorMsg="";this.waiting=false},
      error: (e) => {this.errorMsg = "Se ha producido un error" +  (e.message==0?". ":": " + e.message + ". ");this.waiting=false}    });
    this.modoEdicion = this.uiService.esModoEdicion();
  }

  agregarDatos(){
    const modalRef = this.modalService.open(TecnologiaModalComponent);
    modalRef.result.then((result) => {
      if (result) {
        this.tecnologiaService.addTecnologia(result).subscribe({
          next: (value) => {this.tecnologiasList.push(value); this.errorMsg=""},
          error: (e) => {this.errorMsg=this.uiService.manejarErroresBD(e)}        
        });
      }
    });
  }

  eliminarTecnologia(tecnologia:Tecnologia) {
    this.tecnologiasList = this.tecnologiasList.filter(t => t.id !== tecnologia.id);
  }
}
