import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesRoutes } from './pages.routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { CreateOrderComponent } from './create-order/create-order.component';

// import { UicomponentsModule } from './ui-components/ui-components.module';
import {PortfolioComponent} from "./portfolio/portfolio.component";
import { OrderHistoryComponent } from "./order-history/order-history.component";
import { AllPortfolioComponent } from "./all-portfolio/all-portfolio.component";

@NgModule({
  declarations: [
    AppDashboardComponent,
    CreateOrderComponent,
    PortfolioComponent,
    OrderHistoryComponent,
    AllPortfolioComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    RouterModule.forChild(PagesRoutes),
    TablerIconsModule.pick(TablerIcons),
    // UicomponentsModule

  ],
  exports: [TablerIconsModule],
})
export class PagesModule {}
