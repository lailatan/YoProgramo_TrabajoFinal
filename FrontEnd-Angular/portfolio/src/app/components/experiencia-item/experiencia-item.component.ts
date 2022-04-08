import { Component, OnInit,Input } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {
  @Input() miExperiencia: any;
  modoEdicion: boolean = false;
  Subscription?: Subscription;
  
  constructor(private uiService: UiService) {
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
   }

  ngOnInit(): void {
    this.modoEdicion = this.uiService.esModoEdicion();
  }

}
