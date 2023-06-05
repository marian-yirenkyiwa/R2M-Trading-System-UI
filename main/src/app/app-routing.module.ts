import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { HomepageComponent } from './landingpage/homepage/homepage.component';
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";
import {OrderHistoryComponent} from "./pages/order-history/order-history.component";
import {AllPortfolioComponent} from "./pages/all-portfolio/all-portfolio.component";

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'create-order',
        component: CreateOrderComponent
      },
      {
        path: 'history',
        component: OrderHistoryComponent
      },
      {
        path: 'portfolio',
        component: PortfolioComponent
      },
      {
        path: 'portfolios',
        component: AllPortfolioComponent
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          )
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.module').then((m) => m.ExtraModule),
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
