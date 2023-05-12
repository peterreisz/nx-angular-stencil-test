import { Component, Prop, h, EventEmitter, Event } from '@stencil/core';
import { Foo } from '../../types/foo.interface';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component'
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first = '';

  /**
   * The middle name
   */
  @Prop() middle = '';

  /**
   * The last name
   */
  @Prop() last = '';

  @Prop() foo: Foo = { bar: '' }

  @Event() btnClick!: EventEmitter<string>;

  @Event() bar!: EventEmitter<Foo>;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>
      Hello, World! I'm {this.getText()}
    </div>;
  }
}
