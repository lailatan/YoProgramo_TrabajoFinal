import { Component, OnInit,Input,Output } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Experiencia } from 'src/app/objetos/experiencia';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-experiencia-modal',
  templateUrl: './experiencia-modal.component.html',
  styleUrls: ['./experiencia-modal.component.css']
})
export class ExperienciaModalComponent implements OnInit {
  @Input()  experiencia: Experiencia;
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
      empresa: ['', [Validators.required]],
      fecha_desde: ['', [Validators.required, Validators.pattern("[0-9]{4}-[0-9]{2}")]],
      fecha_hasta: ['', [Validators.required, Validators.pattern("[0-9]{4}-[0-9]{2}")]],
      cargo: ['', [Validators.required]],
      detalle: ['', [Validators.required]],
      });
    if (this.experiencia!==undefined){
      this.f['imagen'].setValue(this.experiencia.imagen); 
      this.f['empresa'].setValue(this.experiencia.empresa); 
      this.f['fecha_desde'].setValue(this.experiencia.fecha_desde); 
      this.f['fecha_hasta'].setValue(this.experiencia.fecha_hasta); 
      this.f['cargo'].setValue(this.experiencia.cargo); 
      this.f['detalle'].setValue(this.experiencia.detalle); 
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
      if (this.experiencia===undefined){
        const newExperiencia = 
        { imagen: this.f['imagen'].value,
          empresa: this.f['empresa'].value,
          fecha_desde: this.f['fecha_desde'].value,
          fecha_hasta: this.f['fecha_hasta'].value,
          cargo: this.f['cargo'].value,
          detalle:this.f['detalle'].value
        };
        this.experiencia = newExperiencia;
      } else {
        this.experiencia.imagen = this.f['imagen'].value;
        this.experiencia.empresa = this.f['empresa'].value;
        this.experiencia.fecha_desde = this.f['fecha_desde'].value;   
        this.experiencia.fecha_hasta = this.f['fecha_hasta'].value;   
        this.experiencia.cargo = this.f['cargo'].value;   
        this.experiencia.detalle = this.f['detalle'].value;   
        }
      this.activeModal.close(this.experiencia);
    }
  }

}
