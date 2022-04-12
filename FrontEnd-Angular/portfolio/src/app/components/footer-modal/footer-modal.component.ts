import { Component, OnInit,Input,Output } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/objetos/persona';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-footer-modal',
  templateUrl: './footer-modal.component.html',
  styleUrls: ['./footer-modal.component.css']
})
export class FooterModalComponent implements OnInit {
  @Input()  persona: Persona;
  linkedin: string;
  github: string;
  anio: number;
  ubicacion: string;
  mail: string;
  //Form Validables 
  dataForm: FormGroup;
  submitted = false;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder ) { 
    }

  get f() { return this.dataForm.controls; }

  ngOnInit(): void {
    this.linkedin = this.persona.linkedin;
    this.github = this.persona.github;
    this.anio = this.persona.anio;  
    this.ubicacion = this.persona.ubicacion;  
    this.mail = this.persona.mail;    

    //Add User form validations
    this.dataForm = this.formBuilder.group({
      linkedin: ['', [Validators.required]],
      github: ['', [Validators.required]],
      anio: ['', [Validators.required, Validators.maxLength, Validators.minLength,Validators.max, Validators.min]],
      ubicacion: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      });
    
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
      this.persona.linkedin = this.linkedin;
      this.persona.github = this.github;
      this.persona.anio = this.anio;   
      this.persona.ubicacion = this.ubicacion;   
      this.persona.mail = this.mail;   
  
      this.activeModal.close(this.persona);
      }
  }
}
