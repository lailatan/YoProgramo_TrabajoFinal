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
  anio: number;
  titulo: string;
  descripcion: string ="";

  //Form Validables 
  dataForm: FormGroup;
  submitted = false;

  constructor(public activeModal: NgbActiveModal,private formBuilder: FormBuilder) { }

  get f() { return this.dataForm.controls; }

  ngOnInit(): void {
    //Add User form validations
    this.dataForm = this.formBuilder.group({
      //anio: ['', [Validators.required,Validators.pattern("\d{4}")]],
      anio: ['', [Validators.required,Validators.max,Validators.min]],
      titulo: ['', [Validators.required]],
      descripcion: ['',]
      });
    if (this.curso!==undefined){
      this.anio = this.curso.anio;
      this.titulo = this.curso.titulo;
      this.descripcion = this.curso.descripcion;    
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
        { id: 0,
          anio: this.anio,
          titulo: this.titulo,
          descripcion: this.descripcion
        };
        this.curso = newCurso;
      } else {
        this.curso.anio = this.anio;
        this.curso.titulo = this.titulo;
        this.curso.descripcion = this.descripcion;   
        }
      this.activeModal.close(this.curso);
    }
  }
}
