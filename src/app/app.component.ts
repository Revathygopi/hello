import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive,} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { AddClientComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLinkActive,RouterLink,ClientListComponent,AddClientComponent,EditClientComponent,HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
