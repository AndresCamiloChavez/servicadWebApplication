import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {UiModule} from "../ui/ui.module";
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    HomeComponent,
    LoginComponent
  ]
})
export class PagesModule {
}
