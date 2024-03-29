import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeatureOneComponent } from './feature-one/feature-one.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureOneComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureOneRoutingModule {}
