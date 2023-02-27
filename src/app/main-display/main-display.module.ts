import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentAreaComponent } from './components/content-area/content-area.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ContentAreaComponent,
    HomeContentComponent,
    NavbarComponent,
    SidebarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterOutlet,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    ToolbarComponent,
    ContentAreaComponent
  ]
})
export class MainDisplayModule { }
