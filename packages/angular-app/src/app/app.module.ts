import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreComponentsAngularModule } from '@nx-angular-stencil-test/core-components-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreComponentsAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
