import { PhotoComment } from './../../photo/photo-comment';
import { PhotoService } from '../../photo/photo.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit {

    @Input() photoId: number;

    comment$: Observable<PhotoComment[]>;

    constructor(
        private photoService: PhotoService,
    ) { }

    ngOnInit(): void {
        this.comment$ = this.photoService.getComments(this.photoId);
    }
}
