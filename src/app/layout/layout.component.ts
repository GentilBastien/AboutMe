import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-hub',
  templateUrl: './layout.component.html',
  imports: [RouterOutlet],
})
export class LayoutComponent {}
