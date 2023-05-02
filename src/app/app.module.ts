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
import { DxDataGridModule, DxCheckBoxModule, DxPieChartModule, DxChartModule } from 'devextreme-angular';
import { SyntheticBasestocksComponent } from './components/synthetic-basestocks/synthetic-basestocks.component';
import { HttpClientModule } from '@angular/common/http';
import { SynteticTabsComponent } from './components/syntetic-tabs/syntetic-tabs.component';
import { SyntheticChartViewComponent } from './components/synthetic-chart-view/synthetic-chart-view.component';

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
    DxChartModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
