import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio.model';
import { EstudioService } from 'src/app/services/estudio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  estudios?: Estudio[]; 
  
  constructor(public estudioService: EstudioService, private router: Router) { }
  
  ngOnInit(): void {
    this.estudioService.getEstudios().subscribe(data=>{this.estudios = data});
    console.log(this.estudios);
  }
  
  delete(id?: number): void {
    console.log(id);
    if (!!id && this.estudios?.find(e => e.id === id)) {
      this.estudioService.deleteEstudio(id).subscribe({
        next: (res) => {
          console.log(res);
          this.estudioService.getEstudios().subscribe(data=>{this.estudios=data});
        },
        error: (e) => console.error(e)
      });
    }
  }

  create(): void {
    this.router.navigateByUrl('estudios/add');
  }

}
