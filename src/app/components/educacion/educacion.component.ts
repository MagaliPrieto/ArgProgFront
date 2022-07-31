import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/model/estudio.model';
import { EstudioService } from 'src/app/services/estudio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  estudios?: Estudio[]; 
  
  constructor(public estudioService: EstudioService) { }
  
  ngOnInit(): void {
    this.estudioService.getEstudios().subscribe(data=>{this.estudios = data});
    console.log(this.estudios);
  }

}
