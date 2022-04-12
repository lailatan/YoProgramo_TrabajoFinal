import { Persona } from "./persona";
import { Experiencia } from "./experiencia";
import { Formacion } from "./formacion";
import { Proyecto } from "./proyecto";
import { Tecnologia } from "./tecnologia";

export interface Portfolio {
    persona: Persona;
    experiencias: Experiencia[];
    formaciones: Formacion[];
    proyectos: Proyecto[];
    tecnologias: Tecnologia[];
}