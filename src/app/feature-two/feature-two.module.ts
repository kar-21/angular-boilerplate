import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureTwoComponent } from './feature-two/feature-two.component';
import { FeatureTwoRoutingModule } from './feature-two-routing.module';

@NgModule({
  declarations: [FeatureTwoComponent],
  imports: [CommonModule, FeatureTwoRoutingModule],
  exports: [FeatureTwoComponent],
})
export class FeatureTwoModule {}
