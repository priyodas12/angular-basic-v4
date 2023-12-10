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
import { ExmStructuralDirectiveComponent } from './learning/exm-structural-directive/exm-structural-directive.component';
import { ExmParentComponent } from './learning/exm-parent/exm-parent.component';
import { ExmChildComponent } from './learning/exm-parent/exm-child/exm-child.component';
import { ExmSibingsCommunicationComponent } from './learning/exm-sibings-communication/exm-sibings-communication.component';
import { ExmSiblingAComponent } from './learning/exm-sibings-communication/exm-sibling-a/exm-sibling-a.component';
import { ExmSiblingBComponent } from './learning/exm-sibings-communication/exm-sibling-b/exm-sibling-b.component';

@NgModule({
  declarations: [
    AppComponent,
    ExmPropertyBindingComponent,
    ExmEventBindingComponent,
    ExmTwdbComponent,
    ExmAttributeDirectiveComponent,
    ChangeToPurpleDirective,
    ExmStructuralDirectiveComponent,
    ExmParentComponent,
    ExmChildComponent,
    ExmSibingsCommunicationComponent,
    ExmSiblingAComponent,
    ExmSiblingBComponent,
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
