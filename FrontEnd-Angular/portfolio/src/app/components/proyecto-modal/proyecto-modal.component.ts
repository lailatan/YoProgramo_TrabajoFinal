import { Component, OnInit,Input,Output } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Proyecto } from 'src/app/objetos/proyecto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proyecto-modal',
  templateUrl: './proyecto-modal.component.html',
  styleUrls: ['./proyecto-modal.component.css']
})

export class ProyectoModalComponent implements OnInit {
  @Input()  proyecto: Proyecto;
  id: number = 0;
  //Form Validables 
  dataForm: FormGroup;
  submitted = false;

  constructor(public activeModal: NgbActiveModal,private formBuilder: FormBuilder) { }

  get f() { return this.dataForm.controls; }

  ngOnInit(): void {
    //Add User form validations
    this.dataForm = this.formBuilder.group({
      imagen: ['', [Validators.required,Validators.maxLength(255)]],
      link: ['', [Validators.required,Validators.maxLength(255)]],
      icono: ['', [Validators.required,Validators.maxLength(255)]],
      nombre: ['', [Validators.required,Validators.maxLength(255)]],
      detalle: ['', [Validators.required,Validators.maxLength(30)]],
      });
    if (this.proyecto!==undefined){
      this.f['imagen'].setValue(this.proyecto.imagen);
      this.f['link'].setValue(this.proyecto.link);
      this.f['icono'].setValue(this.proyecto.icono);
      this.f['nombre'].setValue(this.proyecto.nombre);
      this.f['detalle'].setValue(this.proyecto.detalle);  
    }  
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.dataForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      if (this.proyecto===undefined){
        const newProyecto = 
        { imagen: this.f['imagen'].value,
          link: this.f['link'].value,
          icono: this.f['icono'].value,
          nombre: this.f['nombre'].value,
          detalle: this.f['detalle'].value
        };
        this.activeModal.close(newProyecto);
      } else {
        var proyectoUpd=Object.assign({}, this.proyecto);
        proyectoUpd.imagen = this.f['imagen'].value;
        proyectoUpd.link = this.f['link'].value;
        proyectoUpd.icono = this.f['icono'].value;
        proyectoUpd.nombre = this.f['nombre'].value;
        proyectoUpd.detalle = this.f['detalle'].value;   
        this.activeModal.close(proyectoUpd);
      }
    }
  }

}
