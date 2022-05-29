import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent, PageNotFoundComponent } from './shared/pages';

const routes: Routes = [


  {
    path: '',
    // canActivate: [AgentGuard],
    // data: { expectedRole: 'CC' },
    loadChildren: () => import('./modules').
      then(m => m.WebsiteModule)
  },

  {
    path: 'forbidden',
    component: ForbiddenComponent
  },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page must be at bottom.
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
