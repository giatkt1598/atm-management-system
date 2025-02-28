import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './shared/layouts';

const routes: Routes = [
  {
    path: '',
    canActivate: [],
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/atm',
      },
      {
        path: 'atm',
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadComponent: () =>
              import('src/app/pages/home/home.component').then(x => x.HomeComponent),
          },
          {
            path: 'create',
            loadComponent: () =>
              import('src/app/pages/home/atm-create-edit/atm-create-edit.component').then(
                x => x.AtmCreateEditComponent
              ),
          },
          {
            path: 'edit/:id',
            loadComponent: () =>
              import('src/app/pages/home/atm-create-edit/atm-create-edit.component').then(
                x => x.AtmCreateEditComponent
              ),
          },
        ],
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(x => x.LoginComponent),
  },
  {
    path: '**',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found.component').then(x => x.PageNotFoundComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
