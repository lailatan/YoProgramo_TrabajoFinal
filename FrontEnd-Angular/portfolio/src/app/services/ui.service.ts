import { Injectable, ViewContainerRef } from '@angular/core';
import {Observable,Subject} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../components/login-modal/login-modal.component';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private modoEdicion:boolean = false;
  private subject = new Subject<any>();

  constructor(private modalService: NgbModal, private authService: AuthService) { }

  cambiarModoEdicion(){
    this.modoEdicion = !this.modoEdicion;
    this.subject.next(this.modoEdicion);
    //this.guardarModoEdicion();
  }
  
  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }

  esModoEdicion(){
    this.leerModoEdicion();
    return this.modoEdicion;    
  }

  borrarModoEdicion(){
    sessionStorage.removeItem('editionModeUser');
  }

  guardarModoEdicion(){
    sessionStorage.setItem('editionModeUser',JSON.stringify(this.modoEdicion)); 
  }
  leerModoEdicion(){
    //this.modoEdicion = JSON.parse(sessionStorage.getItem('editionModeUser')||'false'); 
    var currentUser=this.authService.UsuarioAutenticado;
    this.modoEdicion = ((currentUser && currentUser.token)?true:false);
  }
}
