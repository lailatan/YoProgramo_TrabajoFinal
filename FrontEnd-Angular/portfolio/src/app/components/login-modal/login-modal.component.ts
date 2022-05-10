import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UiService } from '../../services/ui.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})

export class LoginModalComponent  {
  //Form Validables 
  dataForm: FormGroup;
  submitted = false;
  datosInvalidos=false;
  errorMsg: String="";

  mail: string = "";
  password: string = "";

  constructor(public activeModal: NgbActiveModal, private authService: AuthService,
    private uiService: UiService,private formBuilder: FormBuilder) {}

  get f() { return this.dataForm.controls; }

  ngOnInit(): void {
    //Add User form validations
    this.dataForm = this.formBuilder.group({
      mail: ['', [Validators.required,Validators.email,Validators.maxLength(255)]],
      password: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(15)]] 
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

    onEnviar(event: Event){
      //	<form [formGroup]="dataForm" (ngSubmit)="onEnviar($event)">
        this.submitted = true;
        // stop here if form is invalid
        if (this.dataForm.invalid) {
          return;
        }
        if(this.submitted){
          event.preventDefault;  
          //console.log("DATAFORM LOGIN" + this.dataForm.value);
          const newEUsuario = 
            { mail: this.f['mail'].value,
            password: this.f['password'].value,
            token: ''
            };
            this.authService.login(newEUsuario).subscribe({
              next: (value) => {if (value==null){
                                this.datosInvalidos=true;
                                this.f['mail'].reset();
                                this.f['password'].reset();
                                this.submitted=false;
                                } else {
                                  this.uiService.cambiarModoEdicion();
                                  this.activeModal.close(true);          
                                }     
              },
              error: (e) => {this.errorMsg = "Se ha producido un error" + 
              (e.status==0?".":": " + e.status + ". "); console.log(e)}
            });            
        }
    }
}