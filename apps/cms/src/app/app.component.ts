import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileGQL } from './graphql/generated';

@Component({
  selector: 'th-root',
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class AppComponent {
  readonly profileGQL = inject(ProfileGQL);

  constructor() {
    // TODO: only for debugging
    this.profileGQL.watch().valueChanges.subscribe(console.log);
  }
}
