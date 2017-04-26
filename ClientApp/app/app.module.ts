import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { UniversalModule } from 'angular2-universal';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule, GrowlModule, DataTableModule, SharedModule, DialogModule } from 'primeng/primeng';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';
import { HeroSearchComponent } from './hero-search.component';
import { PrimeComponent } from './prime.component';
import { CategoryComponent } from '../HomeBudget/Category/category.component'
import { CategoryService } from '../HomeBudget/Category/category.service'

@NgModule({
    bootstrap: [AppComponent],
    imports: [
    UniversalModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ButtonModule,
        GrowlModule,
        DataTableModule,
        SharedModule,
        DialogModule,
        BrowserModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
      PrimeComponent,
      CategoryComponent
  ],
  providers: [ HeroService, CategoryService ] 
})
export class AppModule { }
