import { Router, NavigationStart } from '@angular/router';
import { Alert, AlertType } from './alert';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AlertService {

    alertSubject: Subject<Alert> = new Subject<Alert>();
    keepAfterRouteChange = false;

    constructor(router: Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    this.keepAfterRouteChange = false;
                } else {
                    this.clear();
                }
            }
        });
    }

    success(message: string, keepAfterRouteChange: boolean = false) {
        this.alert(AlertType.SUCCESS, message, keepAfterRouteChange);
    }


    warning(message: string, keepAfterRouteChange: boolean = false) {
        this.alert(AlertType.WARNING, message, keepAfterRouteChange);
    }

    danger(message: string, keepAfterRouteChange: boolean = false) {
        this.alert(AlertType.DANGER, message, keepAfterRouteChange);
    }

    info(message: string, keepAfterRouteChange: boolean = false) {
        this.alert(AlertType.INFO, message, keepAfterRouteChange);
    }

    private alert(alertType: AlertType, message: string, keepAfterRouteChange: boolean) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.alertSubject.next(new Alert(alertType, message));
    }

    clear(): any {
        this.alertSubject.next(null);
    }

    getAlert() {
        return this.alertSubject.asObservable();
    }
}