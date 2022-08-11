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
      imagen: ['', [Validators.required,Validators.maxLength(255)]],
      empresa: ['', [Validators.required,Validators.maxLength(255)]],
      fecha_desde: ['', [Validators.required, Validators.pattern("[0-9]{4}-[0-9]{2}")]],
      fecha_hasta: ['', [Validators.pattern("[0-9]{4}-[0-9]{2}")]],
      cargo: ['', [Validators.required,Validators.maxLength(255)]],
      detalle: ['', [Validators.required,Validators.maxLength(255)]],
      });
    if (this.experiencia!==undefined){
      this.f['imagen'].setValue(this.experiencia.imagen); 
      this.f['empresa'].setValue(this.experiencia.empresa); 
      this.f['fecha_desde'].setValue(this.experiencia.fechaDesde); 
      this.f['fecha_hasta'].setValue(this.experiencia.fechaHasta); 
      this.f['cargo'].setValue(this.experiencia.cargo); 
      this.f['detalle'].setValue(this.experiencia.detalle); 
    }  
  }

  fechasValidas(): boolean{
    if (this.f['fecha_hasta'].value==''){
      return true;
    } else {
      var fechaDesde= this.f['fecha_desde'].value.split('-');
      var fechaHasta= this.f['fecha_hasta'].value.split('-');
      return ((fechaDesde[0]<fechaHasta[0]) || (fechaDesde[0]==fechaHasta[0] && fechaDesde[1]<=fechaHasta[1]));
    }
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.dataForm.invalid) {
    return;
    }
    if (!this.fechasValidas()){
      this.f['fecha_hasta'].setErrors({pattern:true});
      return;
    }

    //True if all the fields are filled
    if(this.submitted)
    {
      if (this.experiencia===undefined){
        const newExperiencia = 
        { imagen: this.f['imagen'].value,
          empresa: this.f['empresa'].value,
          fechaDesde: this.f['fecha_desde'].value,
          fechaHasta: this.f['fecha_hasta'].value,
          cargo: this.f['cargo'].value,
          detalle:this.f['detalle'].value
        };
        this.activeModal.close(newExperiencia);
      } else {
        var experienciaUpd=Object.assign({}, this.experiencia);
        experienciaUpd.imagen = this.f['imagen'].value;
        experienciaUpd.empresa = this.f['empresa'].value;
        experienciaUpd.fechaDesde = this.f['fecha_desde'].value;   
        experienciaUpd.fechaHasta = this.f['fecha_hasta'].value;   
        experienciaUpd.cargo = this.f['cargo'].value;   
        experienciaUpd.detalle = this.f['detalle'].value;   
        this.activeModal.close(experienciaUpd);
      }
    }
  }

}
