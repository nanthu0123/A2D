import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';

import { FooterComponent, HeaderComponent } from './layouts';
import { LandingComponent, LoginComponent } from './pages';
import { NavbarComponent, SocialMediaComponent } from './components';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SocialMediaComponent,
    LandingComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
