import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// custom components
import { LandingComponent, LoginComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
