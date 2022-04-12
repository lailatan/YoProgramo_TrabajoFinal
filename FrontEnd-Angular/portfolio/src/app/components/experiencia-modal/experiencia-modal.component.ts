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
  imagen: string ="";
  empresa: string ="";
  fecha_desde: string ="";
  fecha_hasta: string ="";
  cargo: string ="";
  detalle: string ="";
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
      this.imagen = this.experiencia.imagen;
      this.empresa = this.experiencia.empresa;
      this.fecha_desde = this.experiencia.fecha_desde;    
      this.fecha_hasta = this.experiencia.fecha_hasta;    
      this.cargo = this.experiencia.cargo;    
      this.detalle = this.experiencia.detalle;    
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
        { imagen: this.imagen,
          empresa: this.empresa,
          fecha_desde: this.fecha_desde,
          fecha_hasta: this.fecha_hasta,
          cargo: this.cargo,
          detalle: this.detalle
        };
        this.experiencia = newExperiencia;
      } else {
        this.experiencia.imagen = this.imagen;
        this.experiencia.empresa = this.empresa;
        this.experiencia.fecha_desde = this.fecha_desde;   
        this.experiencia.fecha_hasta = this.fecha_hasta;   
        this.experiencia.cargo = this.cargo;   
        this.experiencia.detalle = this.detalle;   
        }
      this.activeModal.close(this.experiencia);
    }
  }

}
