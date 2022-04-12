import { Component, OnInit,Input,Output } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/objetos/persona';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sobre-mi-modal',
  templateUrl: './sobre-mi-modal.component.html',
  styleUrls: ['./sobre-mi-modal.component.css']
})
export class SobreMiModalComponent implements OnInit {
  @Input()  persona: Persona;
  //sobre_mi: string;
  //Form Validables 
  dataForm: FormGroup;
  submitted = false;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) { }

  get f() { return this.dataForm.controls; }  

  ngOnInit(): void {
    //Add User form validations
    this.dataForm = this.formBuilder.group({
      sobre_mi: ['', [Validators.required]],
      });

    //this.sobre_mi = this.persona.sobre_mi;
    //this.dataForm.get('sobre_mi').setValue('some value');
    this.f['sobre_mi'].setValue(this.persona.sobre_mi); 

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
      //this.persona.sobre_mi = this.sobre_mi
      this.persona.sobre_mi = this.f['sobre_mi'].value; 
      this.activeModal.close(this.persona);
    }
  }
}
/*
77Correccion error al usar [(ngModel)]="sobre_mi" en el html
It looks like you're using ngModel on the same form field as formControlName.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/FormControlName#use-with-ngmodel
*/
