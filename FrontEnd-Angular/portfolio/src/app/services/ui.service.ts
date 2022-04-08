import { Injectable, ViewContainerRef } from '@angular/core';
import {Observable,Subject} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../components/login-modal/login-modal.component';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private modoEdicion:boolean = false;
  private subject = new Subject<any>();

  constructor(private modalService: NgbModal) { }

  cambiarModoEdicion(){
    this.modoEdicion = !this.modoEdicion;
    this.subject.next(this.modoEdicion);
  }
  
  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }

  esModoEdicion(){
    return this.modoEdicion;    
  }
}
