import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { MatIconModule } from '@angular/material/icon';
import { SkillsComponent } from './skills/skills.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CubeComponent } from './cube/cube.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BioComponent } from './bio/bio.component';


@NgModule({
  declarations: [
    HomepageComponent, SkillsComponent, AboutMeComponent, ContactComponent, CubeComponent, BioComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule
  ]
})
export class HomepageModule { }
