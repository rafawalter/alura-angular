import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ap-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent {

    isShown = false;

    toggle() {
        console.log('toggle menu');
        this.isShown = !this.isShown;
    }
}
