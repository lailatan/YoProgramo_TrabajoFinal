import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {
  tecnologiasList: any;
  modoEdicion: boolean = false;
Subscription?: Subscription;

  constructor( private uiService: UiService,
    private datosPortfolio:PortfolioService
  ) {
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
   }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosTecnologias().subscribe(data => {
      this.tecnologiasList = data.tecnologias;
    });
    this.modoEdicion = this.uiService.esModoEdicion();
  }

}
