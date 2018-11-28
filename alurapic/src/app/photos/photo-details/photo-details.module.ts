import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { CommonModule } from '@angular/common';
import { PhotoDetailsComponent } from './photo-details.component';
import { NgModule } from '@angular/core';
import { PhotoModule } from '../photo/photo.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        PhotoDetailsComponent,
        PhotoCommentsComponent,
    ],
    exports: [
        PhotoDetailsComponent,
        PhotoCommentsComponent,
    ],
    imports: [
        CommonModule,
        PhotoModule,
        RouterModule,
        ReactiveFormsModule,
        VMessageModule,
    ]
})
export class PhotoDetailsModule { }
