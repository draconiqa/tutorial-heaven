import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'th-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {}
