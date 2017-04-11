import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { UniversalModule } from 'angular2-universal';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule, GrowlModule } from 'primeng/primeng';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';
import { HeroSearchComponent } from './hero-search.component';
import { PrimeComponent } from './prime.component';


@NgModule({
    bootstrap: [AppComponent],
    imports: [
    UniversalModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ButtonModule,
    GrowlModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    PrimeComponent
  ],
  providers: [ HeroService ] 
})
export class AppModule { }
