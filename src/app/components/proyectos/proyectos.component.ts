import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos?: Proyecto[];
  esEditable: boolean = false;


  constructor(private proyectosService: ProyectosService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.proyectosService.getProyectos().subscribe(data => { this.proyectos = data });
    this.esEditable = this.tokenService.hasAuth();
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

  create(): void {
    this.router.navigateByUrl('proyectos/add');
  }

}
