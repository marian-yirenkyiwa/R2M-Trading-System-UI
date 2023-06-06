import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { PortfolioService } from './services/portfolio.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Layouts
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

// Vertical Layout
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { BrandingComponent } from './layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './layouts/full/sidebar/nav-item/nav-item.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

//Landing Page
import { HomepageComponent } from './landingpage/homepage/homepage.component';
import { AuthTokenInterceptorInterceptor } from './interceptors/auth-token-interceptor.interceptor';

//Portfolio
// import {PortfolioComponent} from "./pages/portfolio/portfolio.component";

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    HomepageComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    MatTableModule,
    ToastrModule.forRoot(),

    
  ],
  exports: [TablerIconsModule],
  bootstrap: [AppComponent],

  providers: [
    { 
      provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptorInterceptor, multi:true
    },
],
})
export class AppModule {}
