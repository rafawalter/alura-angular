import { OnInit, ElementRef, Renderer, Directive } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[showIfLogged]',
})
export class ShowIfLoggedDirective implements OnInit {

    constructor(
        private element: ElementRef,
        private renderer: Renderer,
        private userService: UserService,
    ) { }

    ngOnInit(): void {
        if (!this.userService.isLogged()) {
            this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
        }
    }
}
