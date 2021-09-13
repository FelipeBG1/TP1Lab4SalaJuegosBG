import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './componentes/chat/chat.component';
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { UserGuard } from './guards/user.guard';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';
import { MayorMenorComponent } from './juegos/mayor-menor/mayor-menor.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent, canActivate: [UserGuard]}, 
  { path: 'login', component: LoginComponent},
  { path: 'about', component: QuienSoyComponent, canActivate: [UserGuard]},
  { path: 'registro', component: RegistroComponent},
  { path: 'error', component: ErrorComponent},
  { path: 'chat', component: ChatComponent, canActivate: [UserGuard]},
  { path: 'SalaDeJuegos', loadChildren: () => import('./sala-de-juegos/sala-de-juegos.module').then(m => m.SalaDeJuegosModule), canActivate: [UserGuard]},
  { path: '**', redirectTo: 'error'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
