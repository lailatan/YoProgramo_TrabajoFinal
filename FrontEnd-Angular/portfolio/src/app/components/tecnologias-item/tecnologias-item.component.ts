import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tecnologias-item',
  templateUrl: './tecnologias-item.component.html',
  styleUrls: ['./tecnologias-item.component.css']
})
export class TecnologiasItemComponent implements OnInit {
  @Input() miTecnologia: any;

  constructor() { }

  ngOnInit(): void {
  }

}
