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
    this.details = 'Pequeña introduccion de los datos de Maga';
    this.photoUrl = '/../../assets/img/profile_picture.jpg';
  }

  ngOnInit(): void {
  }
}
