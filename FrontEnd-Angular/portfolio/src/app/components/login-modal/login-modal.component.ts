import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})

export class LoginModalComponent  {
//@Input() lesson: Lesson;


  email: string = "";
  password: string = "";

  constructor(public activeModal: NgbActiveModal,
    private uiService: UiService) {}

  validarLogin() {
    this.uiService.cambiarModoEdicion();
    this.activeModal.close(true);
  }
  onSubmit() {
    console.log(this.email);
    console.log(this.password);
    this.uiService.cambiarModoEdicion();
    this.activeModal.close(); //It closes successfully
}
}
