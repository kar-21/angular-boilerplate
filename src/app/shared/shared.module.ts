import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { SharedComponent } from "./components/shared/shared.component";
import { ButtonComponent } from "./components/button/button.component";

@NgModule({
  declarations: [SharedComponent, ButtonComponent],
  imports: [CommonModule, SharedRoutingModule]
})
export class SharedModule {}
