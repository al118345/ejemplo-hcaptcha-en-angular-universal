import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgHcaptchaModule} from "ng-hcaptcha";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgHcaptchaModule.forRoot({
      siteKey: '10000000-ffff-ffff-ffff-000000000001',
      languageCode: 'es' // optional, will default to browser language
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
