import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLab } from 'src/app/model/experienciaLab.model';
import { ExperienciaLabService } from 'src/app/services/experiencia-lab.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciasLab?: ExperienciaLab[];
  constructor(private experienciaLabService:ExperienciaLabService, private router: Router) { }//inyección del servicio en el constructor

  ngOnInit(): void {
    this.experienciaLabService.getExperiencias().subscribe(data=>{this.experienciasLab=data});
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
