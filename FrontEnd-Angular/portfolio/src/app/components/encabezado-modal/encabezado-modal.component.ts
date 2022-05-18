import { Component, OnInit,Input,Output } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/objetos/persona';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-encabezado-modal',
  templateUrl: './encabezado-modal.component.html',
  styleUrls: ['./encabezado-modal.component.css']
})
export class EncabezadoModalComponent implements OnInit {
  @Input()  persona: Persona;
  //Form Validables 
  dataForm: FormGroup;
  submitted = false;

  constructor(public activeModal: NgbActiveModal,private formBuilder: FormBuilder) { }

  get f() { return this.dataForm.controls; }

  ngOnInit(): void {
    //Add User form validations
    this.dataForm = this.formBuilder.group({
      nombre: ['', [Validators.required,Validators.maxLength(255)]],
      profesion: ['', [Validators.required,Validators.maxLength(255)]],
      foto: ['', [Validators.required,Validators.maxLength(255)]],
      });
      if (this.persona!==undefined){
        this.f['nombre'].setValue(this.persona.nombre); 
        this.f['profesion'].setValue(this.persona.profesion); 
        this.f['foto'].setValue(this.persona.foto); 
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
      var personaUpd=Object.assign({}, this.persona);
      personaUpd.nombre = this.f['nombre'].value;
      personaUpd.profesion = this.f['profesion'].value;
      personaUpd.foto = this.f['foto'].value;     

      this.activeModal.close(personaUpd);
    }
  }
}