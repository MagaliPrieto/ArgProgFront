import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLab } from 'src/app/model/experienciaLab.model';
import { ExperienciaLabService } from 'src/app/services/experiencia-lab.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciasLab?: ExperienciaLab[];
  esEditable: boolean = false;
  constructor(private experienciaLabService:ExperienciaLabService, private router: Router, private tokenService: TokenService) { }//inyección del servicio en el constructor

  ngOnInit(): void {
    this.experienciaLabService.getExperiencias().subscribe(data=>{this.experienciasLab=data});
    this.esEditable = this.tokenService.hasAuth();
    console.log(this.experienciasLab);
  }

  delete(id?: number): void {
    console.log(id);
    if (!!id && this.experienciasLab?.find(e => e.id === id)) {
      this.experienciaLabService.deleteExperiencia(id).subscribe({
        next: (res) => {
          console.log(res);
          this.experienciaLabService.getExperiencias().subscribe(data=>{this.experienciasLab=data});
        },
        error: (e) => console.error(e)
      });
    }
  }

  create(): void {
    this.router.navigateByUrl('experiencias/add');
  }

}
