import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const ROUTES: Routes = [
    { path: 'user', component: UserProfileComponent },
    { path: 'sign-up', component: SignUpComponent},
];

export { ROUTES };
