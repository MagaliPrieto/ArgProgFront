import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos?: Proyecto[];


  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void {
    this.proyectosService.getProyectos().subscribe(data => { this.proyectos = data });
    console.log(this.proyectos);
  }


}
