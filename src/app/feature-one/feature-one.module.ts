import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FeatureOneRoutingModule } from './feature-one-routing.module';
import { FeatureOneComponent } from './feature-one/feature-one.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [FeatureOneComponent, ReactiveFormComponent],
  imports: [
    FeatureOneRoutingModule,

    CommonModule,
    MatInputModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FeatureOneComponent,

    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FeatureOneModule {}
