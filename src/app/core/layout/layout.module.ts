import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatSidenavModule } from "@angular/material/sidenav";
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatRippleModule,
    MatDividerModule,
    MatIconModule,
    // NgOptimizedImage
  ],
  exports: [LayoutComponent, HeaderComponent]
})
export class LayoutModule { }
