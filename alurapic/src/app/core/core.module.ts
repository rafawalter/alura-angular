import { RequestInterceptor } from './auth/request.interceptor';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    declarations: [HeaderComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [HeaderComponent],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: RequestInterceptor,
        multi: true
    }]
})
export class CoreModule { }
