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
    'Cloudflare',
    'Dart',
    'Docker',
    'Electron',
    'Flask',
    'Flutter',
    'Git',
    'Google Cloud Platform',
    'HTML',
    'Hadoop',
    'Haskell',
    'Ionic',
    'Java',
    'JavaScript',
    'Jenkins',
    'Jira',
    'Jupyter Notebook',
    'Kubernetes',
    'Linux',
    'MongoDB',
    'MySQL',
    'NodeJS',
    'OAuth',
    'Openshift',
    'Play',
    'Postgresql',
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
