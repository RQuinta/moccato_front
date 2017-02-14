import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
    { 
        path: '', 
        component: LoginComponent 
    },
    { 
        path: 'login', 
        component: LoginComponent 
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'user/:id',
        component: UserComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: '**',
        component: LoginComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);