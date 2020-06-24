import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  names = [
    'AWS S3',
    'Android',
    'Angular',
    'Bash',
    'C',
    'Flask',
    'Git',
    'Google Cloud Platform',
    'HTML',
    'Hadoop',
    'Haskell',
    'Ionic',
    'Java',
    'JavaScript',
    'Jenkins',
    'Kubernetes',
    'Linux',
    'MongoDB',
    'MySQL',
    'NodeJS',
    'Openshift',
    'Python',
    'React',
    'Scala',
    'Spring',
  ];
  constructor() {}

  ngOnInit(): void {}
  getImagePath(name: string) {
    return `../../assets/skills/${name}.svg`;
  }
}
