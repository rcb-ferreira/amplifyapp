import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DequeueRoutingModule } from './dequeue-routing.module';
import { DequeueComponent } from './dequeue.component';

@NgModule({
  declarations: [
    DequeueComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DequeueRoutingModule
  ]
})
export class DequeueModule { }
