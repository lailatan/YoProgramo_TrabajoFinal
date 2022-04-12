import { Component, OnInit,Input,Output } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Tecnologia } from 'src/app/objetos/tecnologia';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tecnologia-modal',
  templateUrl: './tecnologia-modal.component.html',
  styleUrls: ['./tecnologia-modal.component.css']
})
export class TecnologiaModalComponent implements OnInit {
  @Input()  tecnologia: Tecnologia;
  nombre: string ="";
  detalle: string ="";
  imagen: string ="";
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
      nombre: ['', [Validators.required]],
      detalle: ['', [Validators.required]],
      });
    if (this.tecnologia!==undefined){
      this.nombre = this.tecnologia.nombre;
      this.detalle = this.tecnologia.detalle;
      this.imagen = this.tecnologia.imagen;    
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
      if (this.tecnologia===undefined){
        const newTecnologia = 
        { imagen: this.imagen,
          nombre: this.nombre,
          detalle: this.detalle
        };
        this.tecnologia = newTecnologia;
      } else {
        this.tecnologia.nombre = this.nombre;
        this.tecnologia.detalle = this.detalle;
        this.tecnologia.imagen = this.imagen;   
        }
      this.activeModal.close(this.tecnologia);
    }
  }
}
