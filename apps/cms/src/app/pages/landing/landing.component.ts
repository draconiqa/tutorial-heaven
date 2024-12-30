import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  imports: [CommonModule, RouterLink, NzButtonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {}
