import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SecondaryMenuComponent } from './secondary-menu/secondary-menu.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { SideMenuComponent } from './side-menu/side-menu.component'; 
import { ModalComponent } from './components/modal/modal.component';
import { ModalDemoComponent } from './app-modal/modal-demo.component';
import { SHARED_MODULES } from './app.common';

//kend0 imports
import { HttpClientModule } from '@angular/common/http';
import { IconsModule } from '@progress/kendo-angular-icons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs'; 
import {ResizableModule} from './components/resizable/resizable-module';
import {DraggableModule} from './components/draggable/draggable-module';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ProfileComponent,
    MainMenuComponent,
    SecondaryMenuComponent,
    SearchComponent,
    SideMenuComponent,
    ModalComponent,
    ModalDemoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    DropDownsModule,
    BrowserAnimationsModule,
    ChartsModule,
    ResizableModule,
    DraggableModule,
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
