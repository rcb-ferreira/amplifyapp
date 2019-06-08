import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MuseumComponent } from './museum/museum.component';
import { SettingsService } from './services/settings.service';
import { ApiService } from './services/api.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

export function initSettings(settings: SettingsService) {
  return () => settings.loadSettings();
}

@NgModule({
  declarations: [
    AppComponent,
    MuseumComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  entryComponents: [
    AppComponent,
    MuseumComponent,
    MuseumComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    SettingsService,
    ApiService,
    {
      provide: APP_INITIALIZER,
      useFactory: initSettings,
      deps: [SettingsService],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
