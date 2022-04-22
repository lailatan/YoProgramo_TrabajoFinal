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
      imagen: ['', [Validators.required]],
      link: ['', [Validators.required]],
      icono: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      tecnologias: ['', [Validators.required]],
      });
    if (this.proyecto!==undefined){
      this.f['imagen'].setValue(this.proyecto.imagen);
      this.f['link'].setValue(this.proyecto.link);
      this.f['icono'].setValue(this.proyecto.icono);
      this.f['nombre'].setValue(this.proyecto.nombre);
      this.f['tecnologias'].setValue(this.proyecto.tecnologias);  
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
          tecnologias: this.f['tecnologias'].value
        };
        this.proyecto = newProyecto;
      } else {
        this.proyecto.imagen = this.f['imagen'].value;
        this.proyecto.link = this.f['link'].value;
        this.proyecto.icono = this.f['icono'].value;
        this.proyecto.nombre = this.f['nombre'].value;
        this.proyecto.tecnologias = this.f['tecnologias'].value;   
        }
      this.activeModal.close(this.proyecto);
    }
  }

}