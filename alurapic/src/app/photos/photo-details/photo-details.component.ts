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
    ) { }

    ngOnInit(): void {
        this.photoId = this.route.snapshot.params.photoId;
        this.photo$ = this.photoService
            .findById(this.photoId);
    }

    remove() {
        this.photoService
            .removePhoto(this.photoId)
            .subscribe(
                () => {
                    this.alertService.success('Photo removed');
                    this.router.navigate(['']);
                },
                err => {
                    console.log(err);
                    this.alertService.warning('Could not delete the photo!');
                }
            );
    }
}
