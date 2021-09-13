import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from '../juegos/ahorcado/ahorcado.component';
import { MayorMenorComponent } from '../juegos/mayor-menor/mayor-menor.component';
import { SalaDeJuegosComponent } from './sala-de-juegos.component';

const routes: Routes = [
  { path: '', component: SalaDeJuegosComponent },
  { path: 'ahorcado', component: AhorcadoComponent},
  { path: 'mayormenor', component: MayorMenorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaDeJuegosRoutingModule { }
