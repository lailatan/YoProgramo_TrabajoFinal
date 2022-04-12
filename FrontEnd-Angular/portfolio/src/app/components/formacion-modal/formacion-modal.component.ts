import { Component, OnInit,Input,Output } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Formacion } from 'src/app/objetos/formacion';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Curso } from 'src/app/objetos/curso';
import { CursoModalComponent } from '../curso-modal/curso-modal.component';
import { ConfirmacionModalComponent } from '../confirmacion-modal/confirmacion-modal.component';

@Component({
  selector: 'app-formacion-modal',
  templateUrl: './formacion-modal.component.html',
  styleUrls: ['./formacion-modal.component.css']
})
export class FormacionModalComponent implements OnInit {
  @Input()  formacion: Formacion;
  imagen: string;
  escuela: string;
  cursos: Curso[]=[];
  //Form Validables 
  dataForm: FormGroup;
  submitted = false;

  constructor(public activeModal: NgbActiveModal,private formBuilder: FormBuilder,private modalService: NgbModal) { }

  get f() { return this.dataForm.controls; }

  ngOnInit(): void {
    //Add User form validations
    this.dataForm = this.formBuilder.group({
      imagen: ['', [Validators.required]],
      escuela: ['', [Validators.required]],
      });
    if (this.formacion!==undefined){
      this.imagen = this.formacion.imagen;
      this.escuela = this.formacion.escuela;
      this.cursos = this.formacion.cursos;    
    }  
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.dataForm.invalid) {
        return;
    }

    if (this.faltanCursos()) {
      //alert("Debe ingresar al menos 1 curso");
      return;
   }

    //True if all the fields are filled
    if(this.submitted)
    {
      if (this.formacion===undefined){
        const newFormacion = 
        { imagen: this.imagen,
          escuela: this.escuela,
          cursos: this.cursos
        };
        this.formacion = newFormacion;
      } else {
        this.formacion.imagen = this.imagen;
        this.formacion.escuela = this.escuela;
        this.formacion.cursos = this.cursos;   
        }
      this.activeModal.close(this.formacion);
    }
  }

  prepararDatos(datos:string) {
    if (datos!==undefined){
      datos = datos.split("\n").join("<br />");
    }
    return datos;
  }

  faltanCursos(){
    return this.cursos.length<1;
  }

  agregarCurso(){
    const modalRef = this.modalService.open(CursoModalComponent);
    //modalRef.componentInstance.formacion = new Formacion();
    modalRef.result.then((result) => {
      if (result) {
        result.id=this.proximoId(); 
        this.cursos.push(result);
      }
    });
  }

  editarCurso(curso: Curso){
    const modalRef = this.modalService.open(CursoModalComponent);
    modalRef.componentInstance.curso = curso;
    modalRef.result.then((result) => {
      if (result) {
        this.cursos = this.cursos.filter(c => c.id !== result.id);
        this.cursos.push(result);
      }
    });

  }
  eliminarCurso(curso: Curso){
    const modalRef = this.modalService.open(ConfirmacionModalComponent);
    modalRef.componentInstance.texto = "¿Confirma eliminar este Curso?";
    modalRef.result.then((result) => {
      if (result===true) {
        this.cursos = this.cursos.filter(c => c.id !== curso.id); 
      }
    });
  }

  proximoId(){
      let maximo: number = this.cursos.length;
      this.cursos.forEach(c => {
        if (c.id > maximo) { maximo=c.id}
      });
  return maximo+1;
  }
}
