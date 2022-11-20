import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio.model';
import { EstudioService } from 'src/app/services/estudio.service';

@Component({
  selector: 'app-estudio-add',
  templateUrl: './educacion-add.component.html',
  styleUrls: ['./educacion-add.component.css']
})
export class EducacionAddComponent implements OnInit {

  estudio: Estudio = {
    course: '',
    kindStudy: '',
    place: '',
    stateStudy: '',
    userId: 1
  };
  submitted: boolean = false;

  constructor(private service: EstudioService, private router: Router) { }

  ngOnInit(): void { }

  save(): void {
    this.service.createEstudio(this.estudio)
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
