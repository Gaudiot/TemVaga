  
import { Routes } from '@angular/router';
import { MyRidesComponent } from './my-rides/my-rides.component';
import { AvailableRidesComponent } from './available-rides/available-rides.component';
import { RequestedRidesComponent } from './requested-rides/requested-rides.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

export const routes: Routes = [
  {
    path: 'available-rides',
    component: AvailableRidesComponent,
  },
  {
    path: 'requested-rides',
    component: RequestedRidesComponent,
  },
  {
    path: 'my-rides',
    component: MyRidesComponent,
  },
  {
    path: 'my-profile',
    component: MyProfileComponent,
  },
  {
    path: '',
    redirectTo: '/available-rides',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/available-rides',
    pathMatch: 'full',
  },
];