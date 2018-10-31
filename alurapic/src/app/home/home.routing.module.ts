import { SignUpComponent } from './signup/signup.component';
import { SignInComponent } from './signin/signin.component';
import { AuthGuard } from './../core/auth/auth.guard';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
            { path: '', component: SignInComponent },
            { path: 'signup', component: SignUpComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
