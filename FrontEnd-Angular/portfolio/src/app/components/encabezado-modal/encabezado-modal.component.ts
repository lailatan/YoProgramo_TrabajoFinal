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
  nombre: string;
  profesion: string;
  foto: string;
  //Form Validables 
  dataForm: FormGroup;
  submitted = false;

  constructor(public activeModal: NgbActiveModal,private formBuilder: FormBuilder) { }

  get f() { return this.dataForm.controls; }

  ngOnInit(): void {
    //Add User form validations
    this.dataForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      profesion: ['', [Validators.required]],
      foto: ['', [Validators.required]],
      });

    this.nombre = this.persona.nombre;
    this.profesion = this.persona.profesion;
    this.foto = this.persona.foto;   
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
      this.persona.nombre = this.nombre;
      this.persona.profesion = this.profesion;
      this.persona.foto = this.foto;   

      this.activeModal.close(this.persona);
    }
  }
}
