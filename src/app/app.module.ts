import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { SearchComponent } from './components/search/search.component';

import { SHARED_MODULES } from './app.common';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs'; 
import { HttpClientModule } from '@angular/common/http';
import { IconsModule } from '@progress/kendo-angular-icons';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ProfileComponent,
    MainMenuComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropDownsModule,
    BrowserAnimationsModule,
    ChartsModule,
    ...SHARED_MODULES,
    ButtonsModule,
    DialogsModule,
    InputsModule,
    HttpClientModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
