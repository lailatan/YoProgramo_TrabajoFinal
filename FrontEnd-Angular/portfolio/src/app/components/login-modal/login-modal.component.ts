import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})

export class LoginModalComponent  {
  //Form Validables 
  dataForm: FormGroup;
  submitted = false;

  email: string = "";
  password: string = "";

  constructor(public activeModal: NgbActiveModal,
    private uiService: UiService,private formBuilder: FormBuilder) {}

  get f() { return this.dataForm.controls; }

  ngOnInit(): void {
    //Add User form validations
    this.dataForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]]
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
      //this.f['email'].value;   
      //this.f['password'].value;   
      this.uiService.cambiarModoEdicion();
      this.activeModal.close(true);
    }
}
