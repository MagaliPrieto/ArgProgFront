import { Component, OnInit } from '@angular/core';
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

  constructor(public service: SkillService) { }

  ngOnInit(): void {
    this.service.getSkills().subscribe(data => {
      this.hardSkills = data.filter(s => s.kindSkill === 'HARD');
      this.softSkills = data.filter(s => s.kindSkill === 'SOFT');
    });
  }
}
