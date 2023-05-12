import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIRECTIVES } from '../generated/directives';
import { defineCustomElements } from '@nx-angular-stencil-test/core-components/loader';
import { SelectValueAccessor } from '../generated/directives/select-value-accessor';

defineCustomElements();

@NgModule({
  imports: [CommonModule],
  declarations: [...DIRECTIVES, SelectValueAccessor],
  exports: [...DIRECTIVES, SelectValueAccessor],
})
export class CoreComponentsAngularModule {}
