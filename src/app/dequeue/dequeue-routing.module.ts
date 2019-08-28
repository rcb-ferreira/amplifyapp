import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DequeueComponent } from './dequeue.component';

const routes: Routes = [
  {
    path: 'dequeue',
    component: DequeueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DequeueRoutingModule { }
