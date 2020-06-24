import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { AcademicsComponent } from './academics/academics.component';
import { ResumeComponent } from './resume/resume.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MglTimelineModule } from 'angular-mgl-timeline';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    AcademicsComponent,
    ResumeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MglTimelineModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
