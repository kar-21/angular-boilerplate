import { FeatureTwoModule } from './feature-two/feature-two.module';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { FeatureOneModule } from './feature-one/feature-one.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => FeatureOneModule },
  { path: 'feature', loadChildren: () => FeatureTwoModule },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
