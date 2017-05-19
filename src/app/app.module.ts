import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from 'app/hero.service';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRouterModule } from 'app/app-router.module';
import { HeroListComponent } from './hero-list/hero-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroListComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    HttpModule,
    JsonpModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
