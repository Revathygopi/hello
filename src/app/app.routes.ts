import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogotComponent } from './logot/logot.component';
export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent,
    },
    {
        path:'logot',
        component:LogotComponent,
    },
];
