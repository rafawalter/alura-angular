import { Observable } from 'rxjs';
import { LoadingType } from './loading-type';
import { LoadingService } from './loading.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ap-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['loading.component.css'],
})
export class LoadingComponent implements OnInit {
    loading$: Observable<string>;

    constructor(
        private loadingService: LoadingService,
    ) { }

    ngOnInit(): void {
        this.loading$ = this.loadingService
            .getLoading()
            .pipe(map(loadingType => loadingType.valueOf()));
    }
}
