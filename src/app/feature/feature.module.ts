import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FeatureRoutingModule } from "./feature-routing.module";
import { FeaturePageComponent } from "./components/feature-page/feature-page.component";

@NgModule({
  declarations: [FeaturePageComponent],
  imports: [CommonModule, FeatureRoutingModule]
})
export class FeatureModule {}
