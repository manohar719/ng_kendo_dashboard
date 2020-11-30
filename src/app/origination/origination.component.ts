import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'origination',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './origination.component.html'
})
export class OriginationComponent {
    public user: any = {};

    constructor(private router: Router) {
    }
}
