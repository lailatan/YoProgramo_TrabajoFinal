import { Component, OnInit, Input } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.css']
})
export class ProyectosItemComponent implements OnInit {
  @Input() miProyecto: any;
  modoEdicion: boolean = false;
  Subscription?: Subscription;

  constructor(private uiService: UiService) { 
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
  }

  ngOnInit(): void {
    this.modoEdicion = this.uiService.esModoEdicion();
  }

}
