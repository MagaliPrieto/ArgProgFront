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
  
  delete(id?: number): void {
    console.log(id);
    if (!!id && this.proyectos?.find(e => e.id === id)) {
      this.proyectosService.deleteProyecto(id).subscribe({
        next: (res) => {
          console.log(res);
          this.proyectosService.getProyectos().subscribe(data=>{this.proyectos=data});
        },
        error: (e) => console.error(e)
      });
    }
  }


}
