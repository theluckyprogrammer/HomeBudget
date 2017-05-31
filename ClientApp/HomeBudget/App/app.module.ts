import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { UniversalModule } from 'angular2-universal';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule, GrowlModule, DataTableModule, SharedModule, DialogModule, DropdownModule } from 'primeng/primeng';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }         from './app.component';
import { CategoryComponent } from '../Category/category.component'
import { CategoryService } from '../Category/category.service'

import { PlanComponent } from '../Plan/plan.component'
import { PlanService } from '../Plan/plan.service'

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
        BrowserModule,
        DropdownModule
  ],
  declarations: [
    AppComponent,   
      CategoryComponent,
      PlanComponent
  ],
  providers: [ CategoryService, PlanService ] 
})
export class AppModule { }
