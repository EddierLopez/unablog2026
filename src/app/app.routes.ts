import { Routes } from '@angular/router';
import{Home} from './components/home/home'
import { Error } from './components/error/error';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'login',component:Login},
    {path:'categoria/:id',component:Home},
    {path:'register',component:Register},
    {path:'**',component:Error}
];
