import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from '../Category/category.component';

const routes: Routes = [
  { path: '', redirectTo: '/category', pathMatch: 'full' },  
  { path: 'category', component: CategoryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
