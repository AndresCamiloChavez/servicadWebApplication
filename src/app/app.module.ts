import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PagesModule} from './pages/pages.module';

import {AppComponent} from './app.component';
import {UiModule} from "./ui/ui.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    UiModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
