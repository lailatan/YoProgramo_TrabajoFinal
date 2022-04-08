import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectosList: any;
  modoEdicion: boolean = false;
  Subscription?: Subscription;

  constructor(private uiService: UiService,
    private datosPortfolio:PortfolioService
  ) { 
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosProyectos().subscribe(data => {
      this.proyectosList = data.proyectos;
    });
    this.modoEdicion = this.uiService.esModoEdicion();
  }

}
