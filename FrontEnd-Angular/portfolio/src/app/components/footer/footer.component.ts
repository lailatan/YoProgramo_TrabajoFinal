import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  misDatos: any;
  modoEdicion: boolean = false;
  Subscription?: Subscription;

  constructor( 
    private modalService: NgbModal,
    private uiService: UiService, 
    private datosPortfolio:PortfolioService 
    ) {
      this.Subscription = this.uiService.onToggle().subscribe(value => this.modoEdicion = value); }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosGenerales().subscribe(data => {
       this.misDatos = data;
    });
  }

  toggleLogIn() {
      const modalRef = this.modalService.open(LoginModalComponent);
      //const modalRef = this.modalService.open(LoginModalComponent,{ disableClose: true });
      //const modalRef = this.modalService.open(LoginModalComponent);
      
      //pasar valor
      //modalRef.componentInstance.lesson = lesson;
     
      //recibir valor
      //modalRef.result.then((result) => {
      //  if ( result) {
      //    this.uiService.toggleLogin();
      //   }
      //});       
    }
    toggleLogOut(){
      this.uiService.cambiarModoEdicion();
    }
}
