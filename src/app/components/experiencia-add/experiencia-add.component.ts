import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLab } from 'src/app/model/experienciaLab.model';
import { ExperienciaLabService } from 'src/app/services/experiencia-lab.service';

@Component({
  selector: 'app-experiencia-add',
  templateUrl: './experiencia-add.component.html',
  styleUrls: ['./experiencia-add.component.css']
})
export class ExperienciaAddComponent implements OnInit {

  experienciaLab: ExperienciaLab = {
    company: '',
    description: '',
    endDate: '',
    startDate: '',
    userId: 1
  };
  submitted: boolean = false;

  constructor(private experienciaLabService: ExperienciaLabService, private router: Router) { }

  ngOnInit(): void { }

  save(): void {
    this.experienciaLabService.createExperiencia(this.experienciaLab)
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
