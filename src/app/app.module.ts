import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, NgModel } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExmPropertyBindingComponent } from './learning/exm-property-binding/exm-property-binding.component';
import { ExmEventBindingComponent } from './learning/exm-event-binding/exm-event-binding.component';
import { ExmTwdbComponent } from './learning/exm-twdb/exm-twdb.component';
import { ExmAttributeDirectiveComponent } from './learning/exm-attribute-directive/exm-attribute-directive.component';
import { ChangeToPurpleDirective } from './learning/change-to-purple.directive';

@NgModule({
  declarations: [
    AppComponent,
    ExmPropertyBindingComponent,
    ExmEventBindingComponent,
    ExmTwdbComponent,
    ExmAttributeDirectiveComponent,
    ChangeToPurpleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
