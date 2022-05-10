import { Component, OnInit,Input,Output } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Curso } from 'src/app/objetos/curso';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-curso-modal',
  templateUrl: './curso-modal.component.html',
  styleUrls: ['./curso-modal.component.css']
})
export class CursoModalComponent implements OnInit {
  @Input()  curso: Curso;


  //Form Validables 
  dataForm: FormGroup;
  submitted = false;

  constructor(public activeModal: NgbActiveModal,private formBuilder: FormBuilder) { }

  get f() { return this.dataForm.controls; }

  ngOnInit(): void {
    //Add User form validations
    this.dataForm = this.formBuilder.group({
      //anio: ['', [Validators.required,Validators.pattern("\d{4}")]],
      anio: ['', [Validators.required,Validators.max(3000),Validators.min(1900)]],
      titulo: ['', [Validators.required,Validators.maxLength(255)]],
      descripcion: ['',[Validators.maxLength(255)]]
      });
    if (this.curso!==undefined){
      this.f['anio'].setValue(this.curso.anio); 
      this.f['titulo'].setValue(this.curso.titulo); 
      this.f['descripcion'].setValue(this.curso.descripcion);   
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
      if (this.curso===undefined){
        const newCurso =
        { anio: this.f['anio'].value,
          titulo: this.f['titulo'].value,
          descripcion: this.f['descripcion'].value
        };
        this.activeModal.close(newCurso);
      } else {
        var cursoUpd=Object.assign({}, this.curso);
        cursoUpd.anio =this.f['anio'].value;
        cursoUpd.titulo = this.f['titulo'].value;
        cursoUpd.descripcion = this.f['descripcion'].value;
        this.activeModal.close(cursoUpd);
      }
    }
  }
}
