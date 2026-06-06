import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from './features/admin/dashboard/dashboard';
import { Sidebar } from './core/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dashboard, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dairy360');
}
