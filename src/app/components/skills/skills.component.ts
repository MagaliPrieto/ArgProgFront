import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  hardSkills?: Skill[];
  softSkills?: Skill[];

  constructor(public service: SkillService, private router: Router) { }

  ngOnInit(): void {
    this.service.getSkills().subscribe(data => {
      this.hardSkills = data.filter(s => s.kindSkill === 'HARD');
      this.softSkills = data.filter(s => s.kindSkill === 'SOFT');
    });
  }

  delete(id?: number): void {
    console.log(id);
    if (!!id && (this.hardSkills?.find(e => e.id === id) || this.softSkills?.find(e => e.id === id))) {
      this.service.deleteSkill(id).subscribe({
        next: (res) => {
          console.log(res);
          this.service.getSkills().subscribe(data => {
            this.hardSkills = data.filter(s => s.kindSkill === 'HARD');
            this.softSkills = data.filter(s => s.kindSkill === 'SOFT');
          });
        },
        error: (e) => console.error(e)
      });
    }
  }

  create(): void {
    this.router.navigateByUrl('skills/add');
  }

}
