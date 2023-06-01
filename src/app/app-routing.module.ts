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
import { ProductPropertiesComponent } from './components/product-properties/product-properties.component';
import { BlenderDatabaseComponent } from './components/blender-database/blender-database.component';
import { FaqComponent } from './components/faq/faq.component';
import { ConventionalBasestocksSupplyAndDemandModelComponent } from './components/conventional-basestocks-supply-and-demand-model/conventional-basestocks-supply-and-demand-model.component';
import { RoutesToDecarbonizationComponent } from './components/routes-to-decarbonization/routes-to-decarbonization.component';
import { DecarbonizationsListComponent } from './components/decarbonizations-list/decarbonizations-list.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

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
  { path: 'product-properties', component: ProductPropertiesComponent },
  { path: 'blender-database', component: BlenderDatabaseComponent },
  {
    path: 'routes-to-decarbonization',
    component: RoutesToDecarbonizationComponent,
  },
  { path: 'decarbonizations-list', component: DecarbonizationsListComponent },
  { path: 'card-details/:id', component: CardDetailsComponent },
  {
    path: 'conventional-basestocks',
    component: ConventionalBasestocksSupplyAndDemandModelComponent,
  },
  { path: 'faq', component: FaqComponent },
  { path: 'search-results', component: SearchResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
