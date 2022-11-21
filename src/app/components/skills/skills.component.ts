import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  hardSkills?: Skill[];
  softSkills?: Skill[];
  esEditable: boolean = false;

  constructor(public service: SkillService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.service.getSkills().subscribe(data => {
      this.hardSkills = data.filter(s => s.kindSkill === 'HARD');
      this.softSkills = data.filter(s => s.kindSkill === 'SOFT');
    });
    this.esEditable = this.tokenService.hasAuth();
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
