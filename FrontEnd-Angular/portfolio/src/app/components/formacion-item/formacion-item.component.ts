import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formacion-item',
  templateUrl: './formacion-item.component.html',
  styleUrls: ['./formacion-item.component.css']
})
export class FormacionItemComponent implements OnInit {
  @Input() miFormacion: any;

  constructor() {
   }

  ngOnInit(): void {
  }

  prepararDatos(datos:string) {
    console.log(datos);
    datos = datos.split("\n").join("<br />");
    return datos;
  }

}