import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const ROUTES: Routes = [
    { path: 'user', component: UserProfileComponent, pathMatch: 'full' },
    { path: '', component: UserProfileComponent, pathMatch: 'full' },
    { path: 'sign-up', component: SignUpComponent, pathMatch: 'full' },
];

export { ROUTES };
