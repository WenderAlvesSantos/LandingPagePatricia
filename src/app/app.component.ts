import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule, RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {}
