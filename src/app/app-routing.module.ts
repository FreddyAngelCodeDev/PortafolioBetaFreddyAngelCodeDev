import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyProyectsComponent } from './my-proyects/my-proyects.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';

const routes: Routes = [
  { path:'', component: AboutMeComponent},
  { path:'Skills', component: MySkillsComponent},
  { path:'Proyects', component: MyProyectsComponent},
  { path:'Courses', component: MyCoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
