import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from '../juegos/ahorcado/ahorcado.component';
import { Aproxima2Component } from '../juegos/aproxima2/aproxima2.component';
import { MayorMenorComponent } from '../juegos/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from '../juegos/preguntados/preguntados.component';
import { SalaDeJuegosComponent } from './sala-de-juegos.component';

const routes: Routes = [
  { path: '', component: SalaDeJuegosComponent },
  { path: 'ahorcado', component: AhorcadoComponent},
  { path: 'mayormenor', component: MayorMenorComponent},
  { path: 'preguntados', component: PreguntadosComponent},
  { path: 'aproxima2', component: Aproxima2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaDeJuegosRoutingModule { }
