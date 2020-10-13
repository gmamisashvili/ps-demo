import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UserSettingsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
