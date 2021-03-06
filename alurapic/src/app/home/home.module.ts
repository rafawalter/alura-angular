import { SignUpService } from './signup/signup.service';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

import { SignUpComponent } from './signup/signup.component';
import { SignInComponent } from './signin/signin.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent,
        HomeComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        HomeRoutingModule,
    ],
    providers: [
        SignUpService
    ]
})
export class HomeModule { }
