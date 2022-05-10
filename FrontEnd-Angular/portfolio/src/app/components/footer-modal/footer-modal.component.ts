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
  
  //Form Validables 
  dataForm: FormGroup;
  submitted = false;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder ) { 
    }

  get f() { return this.dataForm.controls; }

  ngOnInit(): void {
    //Add User form validations
    this.dataForm = this.formBuilder.group({
      linkedin: ['', [Validators.required,Validators.maxLength(255)]],
      github: ['', [Validators.required,Validators.maxLength(255)]],
      anio: ['', [Validators.required, Validators.maxLength, Validators.minLength,Validators.max(3000), Validators.min(1900)]],
      ubicacion: ['', [Validators.required,Validators.maxLength(255)]],
      mail: ['', [Validators.required, Validators.email,Validators.maxLength(255)]],
      });
      if (this.persona!==undefined){
        this.f['linkedin'].setValue(this.persona.linkedin); 
        this.f['github'].setValue(this.persona.github); 
        this.f['anio'].setValue(this.persona.anio); 
        this.f['ubicacion'].setValue(this.persona.ubicacion); 
        this.f['mail'].setValue(this.persona.mail); 
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
      personaUpd.linkedin = this.f['linkedin'].value;
      personaUpd.github = this.f['github'].value;
      personaUpd.anio = this.f['anio'].value;  
      personaUpd.ubicacion = this.f['ubicacion'].value;  
      personaUpd.mail = this.f['mail'].value;  
  
      this.activeModal.close(personaUpd);
      }
  }
}
