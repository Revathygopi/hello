import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive,Router} from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLinkActive,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
