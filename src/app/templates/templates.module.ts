import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PublicViewComponent } from './public-view/public-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    HomeComponent,
    PublicViewComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TemplatesModule { }
