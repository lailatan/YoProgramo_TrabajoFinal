import { Component, OnInit,AfterViewInit, ViewChild, ElementRef  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit , AfterViewInit{
  @ViewChild('from') fromInputElement!: ElementRef<HTMLInputElement>;
  enviado:boolean =false;
  enviando:boolean =false;

  //Form Validables 
  dataForm: FormGroup;
  submitted = false;
  errorMsg: String="";

  constructor(private formBuilder: FormBuilder,private mailService: MailService) { }

  ngOnInit(): void {
    //Add User form validations
    this.dataForm = this.formBuilder.group({
      from: ['', [Validators.required,Validators.email,Validators.maxLength(255)]],
      subject: ['', [Validators.required,Validators.maxLength(255)]],
      text: ['',[Validators.required,Validators.maxLength(500)]]
      });
  }
  ngAfterViewInit(): void {
    this.fromInputElement.nativeElement.focus();
  }
  get f() { return this.dataForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.dataForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      this.enviando =true;
      const newMail = 
      { from: this.f['from'].value,
        subject: this.f['subject'].value,
        text: this.f['text'].value
      };
      this.mailService.enviarMail(newMail).subscribe({
        next: (value) => { this.enviando=false;this.enviado =true;this.errorMsg =''},
        error: (e) => {this.enviando=false;
                       this.enviado =true;
                       this.errorMsg = "Se ha producido un error" + (e.message==0?".":": " + e.message + ". "); }
      });            
    }
  }
}
