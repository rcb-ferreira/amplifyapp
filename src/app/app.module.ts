import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
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
import { BetsModule } from './bets/bets.module';
import { BetsComponent } from './bets/bets.component';
import { ErrorComponent } from './error/error.component';

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
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BetsModule,
    RouterModule.forRoot([]),
  ],
  entryComponents: [
    AppComponent,
    MuseumComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    BetsComponent,
    ErrorComponent
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
