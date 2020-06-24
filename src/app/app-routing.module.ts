import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { AcademicsComponent } from './academics/academics.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'experience', component: ExperienceComponent },
  { path: 'academics', component: AcademicsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', redirectTo: '/about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
