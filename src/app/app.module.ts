import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LendingPageComponent } from './lending-page/lending-page.component';
import { HeaderComponent } from './components/header/header.component';
import { DxGalleryModule  } from 'devextreme-angular';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { NewsSidebarComponent } from './components/news-sidebar/news-sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { OutClickDirective } from './directives/out-click.directive';
import { BioBasestocksComponent } from './components/bio-basestocks/bio-basestocks.component';
import { LendingPageComponent } from './lending-page/lending-page.component';
import { WebinarsComponent } from './components/webinars/webinars.component';
// import { BioBasestocksComponent } from './pages/bio-basestocks/bio-basestocks.component'
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxToolbarModule,
    DxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
