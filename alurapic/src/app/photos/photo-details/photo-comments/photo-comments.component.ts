import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

    commentForm: FormGroup;
    comment$: Observable<PhotoComment[]>;

    constructor(
        private photoService: PhotoService,
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.comment$ = this.photoService.getComments(this.photoId);
        this.commentForm = this.formBuilder.group({
            comment: ['', Validators.maxLength(300)],
        });
    }

    save() {
        const comment = this.commentForm.get('comment').value as string;
        this.photoService
            .addComment(this.photoId, comment)
            .subscribe(() => {
                this.commentForm.reset();
                alert('Comentário adicionado com sucesso');
            });
    }
}
