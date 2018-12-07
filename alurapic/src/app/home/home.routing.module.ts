import { SignUpComponent } from './signup/signup.component';
import { SignInComponent } from './signin/signin.component';
import { LoginGuard } from '../core/auth/login.guard';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: '', component: HomeComponent, canActivate: [LoginGuard], children: [
            { path: '', component: SignInComponent, data: { title: 'Sign in' } },
            { path: 'signup', component: SignUpComponent, data: { title: 'Sign up' } },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
