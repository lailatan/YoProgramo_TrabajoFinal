import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  formacionList: any;
  modoEdicion: boolean = false;
  Subscription?: Subscription;

  constructor(private uiService: UiService,
    private datosPortfolio:PortfolioService
  ) { 
    this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value);
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosFormacion().subscribe(data => {
      this.formacionList = data.formacion;
    });
    this.modoEdicion = this.uiService.esModoEdicion();
  }

}
