import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { ExperienciaItemComponent } from './components/experiencia-item/experiencia-item.component';
import { ProyectosItemComponent } from './components/proyectos-item/proyectos-item.component';
import { TecnologiasItemComponent } from './components/tecnologias-item/tecnologias-item.component';
import { FormacionItemComponent } from './components/formacion-item/formacion-item.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { EncabezadoModalComponent } from './components/encabezado-modal/encabezado-modal.component';
import { FooterModalComponent } from './components/footer-modal/footer-modal.component';
import { SobreMiModalComponent } from './components/sobre-mi-modal/sobre-mi-modal.component';
import { FormacionModalComponent } from './components/formacion-modal/formacion-modal.component';
import { TecnologiaModalComponent } from './components/tecnologia-modal/tecnologia-modal.component';
import { ConfirmacionModalComponent } from './components/confirmacion-modal/confirmacion-modal.component';
import { ExperienciaModalComponent } from './components/experiencia-modal/experiencia-modal.component';
import { ProyectoModalComponent } from './components/proyecto-modal/proyecto-modal.component';
import { CursoModalComponent } from './components/curso-modal/curso-modal.component';
import { ContactoComponent } from './components/contacto/contacto.component';


const appRoutes: Routes = [
  {path:'',component: EncabezadoComponent},
  {path:'home',component: EncabezadoComponent},
  {path:'encabezado',component: EncabezadoComponent},
  {path:'sobre-mi',component: SobreMiComponent},
  {path:'proyectos',component: ProyectosComponent},
  {path:'tecnologias',component: TecnologiasComponent},
  {path:'formacion',component: FormacionComponent},
  {path:'experiencia',component: ExperienciaComponent},
  {path:'experiencias',component: ExperienciaComponent},
  {path:'contacto',component: ContactoComponent},
  {path:'edit',component: EncabezadoComponent},
  {path:'login',component: EncabezadoComponent}
]

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
    EncabezadoComponent,
    ExperienciaItemComponent,
    ProyectosItemComponent,
    TecnologiasItemComponent,
    FormacionItemComponent,
    LoginModalComponent,
    EncabezadoModalComponent,
    FooterModalComponent,
    SobreMiModalComponent,
    FormacionModalComponent,
    TecnologiaModalComponent,
    ConfirmacionModalComponent,
    ExperienciaModalComponent,
    ProyectoModalComponent,
    CursoModalComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
