import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { element } from 'protractor';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {
    constructor(
        private elemento: ElementRef<any>,
        private platformDetector: PlatformDetectorService
    ) {
    }

    ngOnInit(): void {
        if (this.platformDetector.isPlatformBrowser) {
            this.elemento.nativeElement.click();
        }
    }


}
