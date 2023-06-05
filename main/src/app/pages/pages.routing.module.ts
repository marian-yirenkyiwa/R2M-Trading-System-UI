import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import {PortfolioComponent} from "./portfolio/portfolio.component";

export const PagesRoutes: Routes = [
  {
    path: '',
    component: AppDashboardComponent,
    data: {
      title: 'Starter Page',
    },


    },

    {
      path: 'order',
      component: CreateOrderComponent,
    },

  {
    path: 'new-portfolio',
    component: PortfolioComponent
  }

];
