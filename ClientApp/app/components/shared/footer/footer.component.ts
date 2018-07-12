import { Component } from '@angular/core';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    name: string;
    constructor() {
        this.name = 'Sam';
    }
}