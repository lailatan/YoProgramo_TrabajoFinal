import { Component, OnInit, Input } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tecnologias-item',
  templateUrl: './tecnologias-item.component.html',
  styleUrls: ['./tecnologias-item.component.css']
})
export class TecnologiasItemComponent implements OnInit {
  @Input() miTecnologia: any;
  modoEdicion: boolean = false;
  Subscription?: Subscription;

  constructor(private uiService: UiService) { 
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
  }

  ngOnInit(): void {
    this.modoEdicion = this.uiService.esModoEdicion();
  }

}
