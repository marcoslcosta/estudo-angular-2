import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';

import { SettingsService } from './settings.service';


import { CamelCasePipe } from './camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SettingsService,
    {
     provide: LOCALE_ID,
     deps: [SettingsService],
     useFactory: (settingsService) => settingsService.getLocale()
    }
   /* {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
