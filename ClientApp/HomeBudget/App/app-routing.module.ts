import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from '../Category/category.component';
import { PlanComponent } from '../Plan/plan.component';
import { RealizationComponent } from '../Realization/realization.component'

const routes: Routes = [
  { path: '', redirectTo: '/category', pathMatch: 'full' },  
  { path: 'category', component: CategoryComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'realization', component: RealizationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
