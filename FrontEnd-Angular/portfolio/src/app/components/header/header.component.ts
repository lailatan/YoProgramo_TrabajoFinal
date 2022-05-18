import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/objetos/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  misDatos: Persona = {    
    foto: "",
    nombre: "",
    ubicacion: "",
    mail: "",
    anio: undefined,
    profesion: "",
    sobre_mi: "",
    linkedin: "",
    github: ""};
    errorMsg: String="";

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe({
      next: (value) => {this.misDatos=value; this.errorMsg=""},
      error: (e) => {this.errorMsg = "Se ha producido un error" +  (e.message==0?". ":": " + e.message + ". ")}
    });
  
  }
}
