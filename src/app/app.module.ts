import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExmPropertyBindingComponent } from './learning/exm-property-binding/exm-property-binding.component';
import { ExmEventBindingComponent } from './learning/exm-event-binding/exm-event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    ExmPropertyBindingComponent,
    ExmEventBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
