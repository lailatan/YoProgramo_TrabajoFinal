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
  errorMsg: String="";

  constructor(private uiService: UiService,private formacionService:FormacionService,
    private modalService: NgbModal) { 
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
  }

  ngOnInit(): void {
    this.formacionService.getFormaciones().subscribe({
        next: (value) => {this.formacionList=value; this.errorMsg=""},
        error: (e) => {this.errorMsg = "Se ha producido un error" +  (e.message==0?". ":": " + e.message + ". ")}   });
    this.modoEdicion = this.uiService.esModoEdicion();
  }

  agregarDatos(){
    const modalRef = this.modalService.open(FormacionModalComponent);
    //modalRef.componentInstance.formacion = new Formacion();
    modalRef.result.then((result) => {
      if (result) {
        this.formacionService.addFormacion(result).subscribe({
          next: (value) => {this.formacionList.push(value); this.errorMsg=""},
          error: (e) => {this.errorMsg = "Se ha producido un error" +  (e.message==0?". ":": " + e.message + ". ")}        });
      }
    });
  }

  eliminarFormacion(formacion:Formacion) {
        this.formacionList = this.formacionList.filter(t => t.id !== formacion.id);
  }
}
