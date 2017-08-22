import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnitConverterComponent } from './unit-converter/unit-converter.component';
import { FormsModule } from '@angular/forms';
import { UnitConverterService } from './unit-converter/unit-converter.service';

@NgModule({
  declarations: [
    AppComponent,
    UnitConverterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
      UnitConverterService,
  ],
  bootstrap: [
      AppComponent
  ],
})
export class AppModule { }
