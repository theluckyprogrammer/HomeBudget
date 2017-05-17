import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from '../Category/category.component';
import { PlanComponent } from '../Plan/plan.component';

const routes: Routes = [
  { path: '', redirectTo: '/category', pathMatch: 'full' },  
  { path: 'category', component: CategoryComponent },
  { path: 'plan', component: PlanComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
