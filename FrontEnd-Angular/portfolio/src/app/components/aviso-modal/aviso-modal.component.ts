import { Component, OnInit,Input,Output } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-aviso-modal',
  templateUrl: './aviso-modal.component.html',
  styleUrls: ['./aviso-modal.component.css']
})
export class AvisoModalComponent implements OnInit {
  @Input() texto: String;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
}
