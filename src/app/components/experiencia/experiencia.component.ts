import { Component, OnInit } from '@angular/core';
import { ExperienciaLab } from 'src/app/model/experienciaLab.model';
import { ExperienciaLabService } from 'src/app/services/experiencia-lab.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciasLab?: ExperienciaLab[];
  constructor(private experienciaLabService:ExperienciaLabService) { }//inyección del servicio en el constructor

  ngOnInit(): void {
    this.experienciaLabService.getExperiencias().subscribe(data=>{this.experienciasLab=data});
    console.log(this.experienciasLab);
  }

}
