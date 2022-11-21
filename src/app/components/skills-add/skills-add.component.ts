import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills-add',
  templateUrl: './skills-add.component.html',
  styleUrls: ['./skills-add.component.css']
})
export class SkillsAddComponent implements OnInit {

  skill: Skill = {
    kindSkill: '',
    level: 0,
    name: '',
    userId: 1
  };
  submitted: boolean = false;

  constructor(private service: SkillService, private router: Router) { }

  ngOnInit(): void { }

  save(): void {
    this.service.createSkill(this.skill)
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
