import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  enviado:boolean =false;

  //Form Validables 
  dataForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  get f() { return this.dataForm.controls; }

  ngOnInit(): void {
    //Add User form validations
    this.dataForm = this.formBuilder.group({
      mail: ['', [Validators.required,Validators.email]],
      titulo: ['', [Validators.required]],
      mensaje: ['',[Validators.required]]
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
      //this.f['mail'].value
      //this.f['titulo'].value
      //this.f['mensaje'].value
      this.enviado =true;
    }
  }


}
