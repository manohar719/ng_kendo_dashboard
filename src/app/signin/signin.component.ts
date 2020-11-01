import { Component, ViewEncapsulation, NgModule, HostBinding } from '@angular/core';

import { Router } from '@angular/router';

@Component({
    selector: 'signin',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './signin.component.html'
})
export class SigninComponent {
    constructor(private router: Router) {}
    public email = 'admin';
    public password = 'admin';

    @HostBinding('attr.id') protected get id(): string {
        return 'signin';
    }

    @HostBinding('class') protected get appClass(): string {
        return 'signin';
    }

    public onLoginClick() {
        // this.router.navigate(['/dashboard']);
        // this.router.navigate(['/issues']);
        this.router.navigate(['/profile']);
    }
}
