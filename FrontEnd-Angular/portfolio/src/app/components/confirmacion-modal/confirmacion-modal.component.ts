import { Component, OnInit,Input,Output } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmacion-modal',
  templateUrl: './confirmacion-modal.component.html',
  styleUrls: ['./confirmacion-modal.component.css']
})
export class ConfirmacionModalComponent implements OnInit {
  @Input() texto: String;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
}
