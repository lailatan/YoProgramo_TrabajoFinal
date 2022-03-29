import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreMiComponent,
    FormacionComponent,
    ExperienciaComponent,
    TecnologiasComponent,
    ProyectosComponent,
    FooterComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
