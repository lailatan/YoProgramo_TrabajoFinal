import { Component, OnInit, Input } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-formacion-item',
  templateUrl: './formacion-item.component.html',
  styleUrls: ['./formacion-item.component.css']
})
export class FormacionItemComponent implements OnInit {
  @Input() miFormacion: any;
  modoEdicion: boolean = false;
  Subscription?: Subscription;

  constructor( private uiService: UiService) {
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
   }

  ngOnInit(): void {
    this.modoEdicion = this.uiService.esModoEdicion();
  }

  prepararDatos(datos:string) {
    console.log(datos);
    datos = datos.split("\n").join("<br />");
    return datos;
  }

}
