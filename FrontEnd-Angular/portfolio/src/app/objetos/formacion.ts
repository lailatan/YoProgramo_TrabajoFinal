import { Curso } from "./curso";

export interface Formacion {
    id?: number;
    imagen: string;
    escuela: string;
    cursos: Curso[];
}