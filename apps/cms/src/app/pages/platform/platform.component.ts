import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  imports: [
    RouterLink,
    RouterOutlet,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
  ],
  templateUrl: './platform.component.html',
  styleUrl: './platform.component.less',
})
export class PlatformComponent {
  readonly isCollapsed = signal(false);

  toggleCollapsed() {
    this.isCollapsed.update(isCollapsed => !isCollapsed);
  }
}
