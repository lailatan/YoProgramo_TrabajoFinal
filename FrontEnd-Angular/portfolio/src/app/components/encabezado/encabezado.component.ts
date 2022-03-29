import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  misDatos: any;

  constructor( private datosPortfolio:PortfolioService ) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosGenerales().subscribe(data => {
      console.log(data.foto);
      console.log(data.redes_sociales);
      this.misDatos = data;
    });
  }

}
