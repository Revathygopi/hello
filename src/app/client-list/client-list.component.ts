import { Component } from '@angular/core';
import { AddClientComponent } from '../add-client/add-client.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [AddClientComponent,FooterComponent,HeaderComponent ],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {

}
