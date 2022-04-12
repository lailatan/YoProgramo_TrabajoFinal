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
  imagen: string ="";
  link: string ="";
  icono: string ="";
  nombre: string ="";
  tecnologias: string ="";
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
      this.imagen = this.proyecto.imagen;
      this.link = this.proyecto.link;
      this.icono = this.proyecto.icono;    
      this.nombre = this.proyecto.nombre;    
      this.tecnologias = this.proyecto.tecnologias;    
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
        { imagen: this.imagen,
          link: this.link,
          icono: this.icono,
          nombre: this.nombre,
          tecnologias: this.tecnologias
        };
        this.proyecto = newProyecto;
      } else {
        this.proyecto.imagen = this.imagen;
        this.proyecto.link = this.link;
        this.proyecto.icono = this.icono;
        this.proyecto.nombre = this.nombre;
        this.proyecto.tecnologias = this.tecnologias;   
        }
      this.activeModal.close(this.proyecto);
    }
  }

}
