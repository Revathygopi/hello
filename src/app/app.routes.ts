import { Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { AddClientComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
export const routes: Routes = [
  {
    path: 'client/list',
    component: ClientListComponent,
  },
  {
    path: 'client/add',
    component: AddClientComponent,
  },
  {
    path: 'client/edit',
    component: EditClientComponent,
  },
];
