import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    ForbiddenComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
