import { UserService } from './../../core/user/user.service';
import { AlertService } from './../../shared/components/alerts/alert.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Photo } from '../photo/photo';
import { PhotoService } from './../photo/photo.service';
import { PhotoComment } from '../photo/photo-comment';

@Component({
    templateUrl: './photo-details.component.html',
    styleUrls: ['photo-details.css']
})
export class PhotoDetailsComponent implements OnInit {

    photo$: Observable<Photo>;
    photoId: number;


    constructor(
        private route: ActivatedRoute,
        private photoService: PhotoService,
        private router: Router,
        private alertService: AlertService,
        private userService: UserService,
    ) { }

    ngOnInit(): void {
        this.photoId = this.route.snapshot.params.photoId;
        this.photo$ = this.photoService
            .findById(this.photoId);
        this.photo$.subscribe(
            () => { },
            err => {
                console.log(err);
                this.router.navigate(['not-found']);
            });
    }

    remove() {
        this.photoService
            .removePhoto(this.photoId)
            .subscribe(
                () => {
                    this.alertService.success('Photo removed', true);
                    this.router.navigate(['/user', this.userService.getUserName()]);
                },
                err => {
                    console.log(err);
                    this.alertService.warning('Could not delete the photo!', true);
                }
            );
    }

    like(photo: Photo) {
        this.photoService
            .like(photo.id)
            .subscribe(liked => {
                if (liked) {
                    this.photo$ = this.photoService.findById(photo.id);
                }
            }, err => alert(err));
    }
}
