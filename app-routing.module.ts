import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/Contact.component';
import { PersonalComponent } from './personal/personal.component';
import { SkillsComponent } from './skills/skills.component';
import { StrengthComponent } from './strength/strength.component';


const routes: Routes = [
  {path: 'career', component: CareerComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'personal', component: PersonalComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'strength', component: StrengthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
    CareerComponent,
    PersonalComponent,
    StrengthComponent,
    ContactComponent,
    SkillsComponent
]
