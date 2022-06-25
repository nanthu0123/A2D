import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';


import { FooterComponent, HeaderComponent } from './layouts';
import { LandingComponent, LoginComponent } from './pages';
import { NavbarComponent, SocialMediaComponent } from './components';
import { BannerComponent } from './components/banner/banner.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { HomeMainComponent } from './components/home-main/home-main.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SocialMediaComponent,
    LandingComponent,
    LoginComponent,
    BannerComponent,
    TestimonialComponent,
    HomeMainComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
  ]
})
export class WebsiteModule { }
