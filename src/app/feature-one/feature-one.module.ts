import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureOneRoutingModule } from './feature-one-routing.module';
import { FeatureOneComponent } from './feature-one/feature-one.component';

@NgModule({
  declarations: [FeatureOneComponent],
  imports: [CommonModule, FeatureOneRoutingModule],
  exports: [FeatureOneComponent],
})
export class FeatureOneModule {}
