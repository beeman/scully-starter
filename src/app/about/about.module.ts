import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UiModule } from '@kikstart/ui';
import { AboutComponent } from './about.component';

const routes: Routes = [{ path: '', component: AboutComponent }];

@NgModule({
  imports: [UiModule, RouterModule.forChild(routes)],
  declarations: [AboutComponent],
})
export class AboutModule {}
