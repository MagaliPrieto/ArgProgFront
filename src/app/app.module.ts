import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { RrssComponent } from './components/rrss/rrss.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AppRountingModule } from './app-rounting.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaAddComponent } from './components/experiencia-add/experiencia-add.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth-interceptor';
import { EducacionAddComponent } from './components/educacion-add/educacion-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LogoAPComponent,
    RrssComponent,
    BannerComponent,
    AboutComponent,
    InicioSesionComponent,
    PortfolioComponent,
    ExperienciaComponent,
    ExperienciaAddComponent,
    EducacionComponent,
    EducacionAddComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      maxPercent: 100,
      clockwise: false,
      radius: 60,
      showInnerStroke: true,
      titleColor: '#2b2a33',
      showUnits: false,
      showSubtitle: false,
      showZeroOuterStroke: true,
      animation: false
    }),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
