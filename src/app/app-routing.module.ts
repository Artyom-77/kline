import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioBasestocksComponent } from './components/bio-basestocks/bio-basestocks.component';
import { WebinarsComponent } from './components/webinars/webinars.component';
import { LendingPageComponent } from './lending-page/lending-page.component';
import { BasestocksIntroductionOverviewComponent } from './components/basestocks-introduction-overview/basestocks-introduction-overview.component';
import { BioCompareCountriesComponent } from './components/bio-compare-countries/bio-compare-countries.component';
import { SyntheticBasestocksComponent } from './components/synthetic-basestocks/synthetic-basestocks.component';
import { RrboComponent } from './components/rrbo/rrbo.component';
import { PaoDemandComponent } from './components/pao-demand/pao-demand.component';
import { SupplierProfilesComponent } from './components/supplier-profiles/supplier-profiles.component';
const routes: Routes = [
  { path: '', component: LendingPageComponent },
  { path: 'bio-basestocks', component: BioBasestocksComponent },
  { path: 'bio-compare', component: BioCompareCountriesComponent },
  {
    path: 'basestocks-introduction-overview',
    component: BasestocksIntroductionOverviewComponent,
  },
  { path: 'insights', component: WebinarsComponent },
  { path: 'rrbo', component: RrboComponent },
  { path: 'synthetic-basestocks', component: SyntheticBasestocksComponent },
  { path: 'pao-demand', component: PaoDemandComponent },
  { path: 'supplier-profiles', component: SupplierProfilesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
