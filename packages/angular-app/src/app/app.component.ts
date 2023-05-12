import { Component } from '@angular/core';
import { Foo } from '@nx-angular-stencil-test/core-components';

@Component({
  selector: 'nx-angular-stencil-test-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  // Cannot assign anything other than Foo try to replace it with a number
  readonly foo: Foo = { bar: '' }; // e.g. readonly foo = 1

  // Cannot receive anything other then Foo try to replace it with a number:
  onBar(foo: Foo) { // e.g. onBar(foo: number) {
    console.log(foo)
  }
}
