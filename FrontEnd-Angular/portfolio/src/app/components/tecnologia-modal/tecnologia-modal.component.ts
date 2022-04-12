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
      this.f['nombre'].setValue(this.tecnologia.nombre); 
      this.f['detalle'].setValue(this.tecnologia.detalle); 
      this.f['imagen'].setValue(this.tecnologia.imagen);    
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
        { imagen: this.f['imagen'].value,
          nombre: this.f['nombre'].value,
          detalle: this.f['detalle'].value
        };
        this.tecnologia = newTecnologia;
      } else {
        this.tecnologia.imagen = this.f['imagen'].value;
        this.tecnologia.nombre = this.f['nombre'].value;
        this.tecnologia.detalle = this.f['detalle'].value;   
        }
      this.activeModal.close(this.tecnologia);
    }
  }
}
