import { element } from 'protractor';
import { OnInit, ElementRef, Renderer, Directive } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[showIfLogged]',
})
export class ShowIfLoggedDirective implements OnInit {

    currentDisplay: string;

    constructor(
        private _element: ElementRef<any>,
        private renderer: Renderer,
        private userService: UserService,
    ) { }

    ngOnInit(): void {

        this.currentDisplay = getComputedStyle(this._element.nativeElement).display;
        this.userService.getUser().subscribe(user => {
            if (user) {
                this.renderer.setElementStyle(this._element.nativeElement, 'display', this.currentDisplay);
            } else {
                this.currentDisplay = getComputedStyle(this._element.nativeElement).display;
                this.renderer.setElementStyle(this._element.nativeElement, 'display', 'none');
            }
        });
    }
}
