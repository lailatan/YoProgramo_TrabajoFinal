import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  misDatos: any;
  modoEdicion: boolean = false;
  Subscription?: Subscription;
  
  constructor( private uiService: UiService,private datosPortfolio:PortfolioService ) { 
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosGenerales().subscribe(data => {
      this.misDatos = data;
    });
  }

}
