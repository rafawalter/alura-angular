import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        HttpClientModule
    ],
    declarations: [PhotoComponent],
    exports: [PhotoComponent],
})
export class PhotosModule {

}
