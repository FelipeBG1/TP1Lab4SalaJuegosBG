import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent, canActivate: [UserGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'about', component: QuienSoyComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'error', component: ErrorComponent},
  { path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
