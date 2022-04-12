import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Formacion } from 'src/app/objetos/formacion';
import { FormacionService } from 'src/app/services/formacion.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormacionModalComponent} from '../formacion-modal/formacion-modal.component';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  formacionList: Formacion[];
  modoEdicion: boolean = false;
  Subscription?: Subscription;

  constructor(private uiService: UiService,
    private formacionService:FormacionService,
    private modalService: NgbModal
  ) { 
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
  }

  ngOnInit(): void {
    this.formacionService.getFormaciones().subscribe(data => {
      this.formacionList = data;
    });
    this.modoEdicion = this.uiService.esModoEdicion();
  }

  agregarDatos(){
    const modalRef = this.modalService.open(FormacionModalComponent);
    //modalRef.componentInstance.formacion = new Formacion();
    modalRef.result.then((result) => {
      if (result) {
        this.formacionService.addFormacion(result).subscribe(t => 
          this.formacionList.push(t));
      }
    });
  }
  cambiarFormacion(formacion:Formacion) {
    this.formacionService.updateFormacion(formacion).subscribe();
  }
  eliminarFormacion(formacion:Formacion) {
    this.formacionService.deleteFormacion(formacion).subscribe( o => 
      this.formacionList = this.formacionList.filter(t => t.id !== formacion.id) 
      );
  }
}
