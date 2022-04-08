import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  misDatos: any;
  modoEdicion: boolean = false;
  Subscription?: Subscription;

  constructor(private uiService: UiService, private datosPortfolio:PortfolioService) { 
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosGenerales().subscribe(data => {
      console.log("ACAAAA");
      this.misDatos = data;
    });
    this.modoEdicion = this.uiService.esModoEdicion();
  }

}
