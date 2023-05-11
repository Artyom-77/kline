import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LendingPageComponent } from './lending-page/lending-page.component';
import { HeaderComponent } from './components/header/header.component';
import { DxGalleryModule, DxPivotGridModule } from 'devextreme-angular';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { NewsSidebarComponent } from './components/news-sidebar/news-sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { OutClickDirective } from './directives/out-click.directive';
import { BioBasestocksComponent } from './components/bio-basestocks/bio-basestocks.component';
import { LendingPageComponent } from './lending-page/lending-page.component';
import { WebinarsComponent } from './components/webinars/webinars.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { SelectFilterPipe } from './pipes/filter/select-filter.pipe';
import { SelectDatePipe } from './pipes/filter/select-date.pipe';
import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component';
import { BasestocksIntroductionOverviewComponent } from './components/basestocks-introduction-overview/basestocks-introduction-overview.component';
import { SelectCountryPipe } from './pipes/select-country.pipe';
import { BioTabsComponent } from './components/bio-tabs/bio-tabs.component';
import { BioCompareCountriesComponent } from './components/bio-compare-countries/bio-compare-countries.component';
import { ThreeItemsOnlyPipe } from './pipes/three-items-only.pipe';
import {
  DxDataGridModule,
  DxCheckBoxModule,
  DxPieChartModule,
  DxChartModule,
  DxMapModule,
  DxBarGaugeModule,
  DxVectorMapModule
} from 'devextreme-angular';
import { SyntheticBasestocksComponent } from './components/synthetic-basestocks/synthetic-basestocks.component';
import { HttpClientModule } from '@angular/common/http';
import { SynteticTabsComponent } from './components/syntetic-tabs/syntetic-tabs.component';
import { SyntheticChartViewComponent } from './components/synthetic-chart-view/synthetic-chart-view.component';
import { ChartBySegmentComponent } from './components/charts/chart-by-segment/chart-by-segment.component';
import { ChartGrowthRatesComponent } from './components/charts/chart-growth-rates/chart-growth-rates.component';
import { PieChartByProductComponent } from './components/charts/pie-chart-by-product/pie-chart-by-product.component';
import { PieChartSplitByViscosityGradeComponent } from './components/charts/pie-chart-split-by-viscosity-grade/pie-chart-split-by-viscosity-grade.component';
import { RrboComponent } from './components/rrbo/rrbo.component';
import { RegulationRrboComponent } from './components/regulation-rrbo/regulation-rrbo.component';
import { SelectDropdownComponent } from './components/select-dropdown/select-dropdown.component';
import { PieChartSplitByViscosityGradeSecondComponent } from './components/charts/pie-chart-split-by-viscosity-grade-second/pie-chart-split-by-viscosity-grade-second.component';
import { RegulationSummaryTabComponent } from './components/regulation-summary-tab/regulation-summary-tab.component';
import { RegulationUsedOilTabComponent } from './components/regulation-used-oil-tab/regulation-used-oil-tab.component';
import { CapacityMapRrboComponent } from './components/capacity-map-rrbo/capacity-map-rrbo.component';
import { MaterialBalanceRrboComponent } from './components/material-balance-rrbo/material-balance-rrbo.component';
import { PieChartSplitBySegmentComponent } from './components/charts/pie-chart-split-by-segment/pie-chart-split-by-segment.component';
import { PieChartByProductSecondComponent } from './components/charts/pie-chart-by-product-second/pie-chart-by-product-second.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { PaoDemandComponent } from './components/pao-demand/pao-demand.component';
import { PaoChartViewComponent } from './components/pao-chart-view/pao-chart-view.component';
import { PaoChartBySegmentComponent } from './components/charts/pao-chart-by-segment/pao-chart-by-segment.component';
import { PaoChartByGrowthComponent } from './components/charts/pao-chart-by-growth/pao-chart-by-growth.component';
import { PaoPieChartByProductComponent } from './components/charts/pao-pie-chart-by-product/pao-pie-chart-by-product.component';
import { PaoChartGrowthByTypeComponent } from './components/charts/pao-chart-growth-by-type/pao-chart-growth-by-type.component';
import { SupplierProfilesComponent } from './components/supplier-profiles/supplier-profiles.component';
import { SupplierChartCurrentCapacityComponent } from './components/charts/supplier-chart-current-capacity/supplier-chart-current-capacity.component';
import { SupplierChartSustainabilityMeasuresComponent } from './components/charts/supplier-chart-sustainability-measures/supplier-chart-sustainability-measures.component';
import { SupplierPieChartVisgradeYieldComponent } from './components/charts/supplier-pie-chart-visgrade-yield/supplier-pie-chart-visgrade-yield.component';
import { SupplierPieChartOilExportComponent } from './components/charts/supplier-pie-chart-oil-export/supplier-pie-chart-oil-export.component';
import { SupplierPieChartSalesStructureComponent } from './components/charts/supplier-pie-chart-sales-structure/supplier-pie-chart-sales-structure.component';
import { SupplierChartProductionComponent } from './components/charts/supplier-chart-production/supplier-chart-production.component';
import { SupplierProfilesLargeCardComponent } from './components/supplier-profiles-large-card/supplier-profiles-large-card.component';
import { SupplierProfilesFilteringCardsComponent } from './components/supplier-profiles-filtering-cards/supplier-profiles-filtering-cards.component';
import { MultipleSelectDropdownComponent } from './components/multiple-select-dropdown/multiple-select-dropdown.component';
import { SupplierChartCurrentCapacitySmallComponent } from './components/charts/supplier-chart-current-capacity-small/supplier-chart-current-capacity-small.component';
import { ProductPropertiesComponent } from './components/product-properties/product-properties.component';
import { BlenderDatabaseComponent } from './components/blender-database/blender-database.component';
import { PieChartShareOfSynteticEsterComponent } from './components/charts/pie-chart-share-of-syntetic-ester/pie-chart-share-of-syntetic-ester.component';
import { PieChartEsterBySegmentAndProductComponent } from './components/charts/pie-chart-ester-by-segment-and-product/pie-chart-ester-by-segment-and-product.component';
import { PieChartEsterByProductComponent } from './components/charts/pie-chart-ester-by-product/pie-chart-ester-by-product.component';
import { PieChartEsterByEsterComponent } from './components/charts/pie-chart-ester-by-ester/pie-chart-ester-by-ester.component';
import { PieChartShareOfPagComponent } from './components/charts/pie-chart-share-of-pag/pie-chart-share-of-pag.component';
import { PieChartPagBySegmentAndProductComponent } from './components/charts/pie-chart-pag-by-segment-and-product/pie-chart-pag-by-segment-and-product.component';
import { PieChartPagByProductComponent } from './components/charts/pie-chart-pag-by-product/pie-chart-pag-by-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LendingPageComponent,
    HeaderComponent,
    NewsSidebarComponent,
    FooterComponent,
    OutClickDirective,
    BioBasestocksComponent,
    WebinarsComponent,
    FilterPipe,
    SelectFilterPipe,
    SelectDatePipe,
    ButtonComponent,
    ModalComponent,
    BasestocksIntroductionOverviewComponent,
    SelectCountryPipe,
    BioTabsComponent,
    BioCompareCountriesComponent,
    ThreeItemsOnlyPipe,
    SyntheticBasestocksComponent,
    SynteticTabsComponent,
    SyntheticChartViewComponent,
    ChartBySegmentComponent,
    ChartGrowthRatesComponent,
    PieChartByProductComponent,
    PieChartSplitByViscosityGradeComponent,
    RrboComponent,
    RegulationRrboComponent,
    SelectDropdownComponent,
    PieChartSplitByViscosityGradeSecondComponent,
    RegulationSummaryTabComponent,
    RegulationUsedOilTabComponent,
    CapacityMapRrboComponent,
    MaterialBalanceRrboComponent,
    PieChartSplitBySegmentComponent,
    PieChartByProductSecondComponent,
    HeroSectionComponent,
    PaoDemandComponent,
    PaoChartViewComponent,
    PaoChartBySegmentComponent,
    PaoChartByGrowthComponent,
    PaoPieChartByProductComponent,
    PaoChartGrowthByTypeComponent,
    SupplierProfilesComponent,
    SupplierChartCurrentCapacityComponent,
    SupplierChartSustainabilityMeasuresComponent,
    SupplierPieChartVisgradeYieldComponent,
    SupplierPieChartOilExportComponent,
    SupplierPieChartSalesStructureComponent,
    SupplierChartProductionComponent,
    SupplierProfilesLargeCardComponent,
    SupplierProfilesFilteringCardsComponent,
    MultipleSelectDropdownComponent,
    SupplierChartCurrentCapacitySmallComponent,
    ProductPropertiesComponent,
    BlenderDatabaseComponent,
    PieChartShareOfSynteticEsterComponent,
    PieChartEsterBySegmentAndProductComponent,
    PieChartEsterByProductComponent,
    PieChartEsterByEsterComponent,
    PieChartShareOfPagComponent,
    PieChartPagBySegmentAndProductComponent,
    PieChartPagByProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxToolbarModule,
    DxGalleryModule,
    DxPivotGridModule,
    DxDataGridModule,
    DxCheckBoxModule,
    FormsModule,
    HttpClientModule,
    DxPieChartModule,
    DxChartModule,
    DxMapModule,
    DxBarGaugeModule,
    DxVectorMapModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
