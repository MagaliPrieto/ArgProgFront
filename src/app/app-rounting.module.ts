import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { ExperienciaAddComponent } from './components/experiencia-add/experiencia-add.component';

const routes: Routes = [
  { path: 'experiencias/add', component: ExperienciaAddComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'login', component: InicioSesionComponent },
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRountingModule { }
