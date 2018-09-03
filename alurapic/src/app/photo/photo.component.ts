import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
    description = 'Leão';
    url = 'http://img.dgabc.com.br/Imagens/20161128103649.jpg';
}
