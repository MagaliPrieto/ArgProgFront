import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos-add',
  templateUrl: './proyectos-add.component.html',
  styleUrls: ['./proyectos-add.component.css']
})
export class ProyectosAddComponent implements OnInit {

  proyecto: Proyecto = {
    description: '',
    name: '',
    picUrl: '',
    year: '',
    userId: 1
  };
  submitted: boolean = false;

  constructor(private service: ProyectosService, private router: Router) { }

  ngOnInit(): void { }

  save(): void {
    this.service.createProyecto(this.proyecto)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        this.router.navigateByUrl('/portfolio');
      },
      error: (e) => console.error(e)
    });
  }

}
