import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList: any;
  modoEdicion: boolean = false;
Subscription?: Subscription;

  constructor( private uiService: UiService,
    private datosPortfolio:PortfolioService
  ) { 
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosExperiencia().subscribe(data => {
      this.experienciaList = data.experiencia;
    });
    this.modoEdicion = this.uiService.esModoEdicion();
  }

}
