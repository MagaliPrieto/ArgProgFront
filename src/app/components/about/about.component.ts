import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public summary: string;
  public details: string;
  public photoUrl: string;

  constructor() {
    this.summary = 'MAGALI JIMENA PRIETO';
    this.details = 'Soy estudiante de la carrera de Ingenieria Industrial buscando complementar mi formación con conocimientos de IT, sin conocimientos previos al programa Argentina Programa.';
    this.photoUrl = '/../../assets/img/profile_picture.jpg';
  }

  ngOnInit(): void {
  }
}
