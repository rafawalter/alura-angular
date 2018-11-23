import { CommonModule } from '@angular/common';
import { PhotoDetailsComponent } from './photo-details.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [PhotoDetailsComponent],
    exports: [PhotoDetailsComponent],
    imports: [CommonModule]
})
export class PhotoDetailsModule { }
