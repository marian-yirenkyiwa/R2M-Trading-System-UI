import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import {PortfolioComponent} from "./portfolio/portfolio.component";
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ClosePortfolioComponent } from './close-portfolio/close-portfolio.component';

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
      path: 'order-history',
      component: OrderHistoryComponent
    },

    {
      path: 'cancel-order',
      component: AllOrdersComponent
    },
  {
    path: 'new-portfolio',
    component: PortfolioComponent
  },
  {
    path: 'close-portfolio',
    component: ClosePortfolioComponent
  },
  

];
