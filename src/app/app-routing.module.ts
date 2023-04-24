import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioBasestocksComponent } from './components/bio-basestocks/bio-basestocks.component';
import { WebinarsComponent } from './components/webinars/webinars.component';
import { LendingPageComponent } from './lending-page/lending-page.component';
import { BasestocksIntroductionOverviewComponent } from './components/basestocks-introduction-overview/basestocks-introduction-overview.component';
const routes: Routes = [
  { path: '', component: LendingPageComponent },
  { path: 'bio-basestocks', component: BioBasestocksComponent },
  { path: 'basestocks-introduction-overview', component: BasestocksIntroductionOverviewComponent },
  { path: 'webinars', component: WebinarsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
