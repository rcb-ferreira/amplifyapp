import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { SettingsService } from './services/settings.service';
import { ApiService } from './services/api.service';
import { DequeueModule } from './dequeue/dequeue.module';
import { DequeueComponent } from './dequeue/dequeue.component';

export function initSettings(settings: SettingsService) {
  return () => settings.loadSettings();
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    DequeueModule,
  ],
  entryComponents: [
    AppComponent,
    DequeueComponent
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
