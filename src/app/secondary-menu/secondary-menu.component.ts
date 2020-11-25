import { Component, ViewEncapsulation, HostBinding, HostListener, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { menu, x } from '@progress/kendo-svg-icons';
import { Config, Menu } from './../side-menu/types';

@Component({
    selector: 'secondary-menu',
    templateUrl: './secondary-menu.component.html',
    animations: [trigger(
        'toggleSideMenu',
        [
            state( 'collapsed, void', style({left: '-300px'}) ),
            state( 'expanded', style({left: '0'}) ),
            transition( 'collapsed <=> expanded',
                [
                    animate( '0.5s' ),
                    animate( '0.5s' )
                ]
            )
        ]
    )],
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
       './secondary-menu.component.scss'
    ],
})
export class SecondaryMenuComponent {
    public icons = { menu, x };
    public navState: string;
    public listItems: Array<string> = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
    
    //object for side menu
    options: Config = { multi: false };
    public sideMenu : Array<object> = [
        { name: 'FHA Pricing', url: '#' },
        { name: 'Pricing Authorization', url: '#' },
        { name: 'HMDA Cerification', url: '#' },
        { name: 'Loan Auhtorization', url: '#' },
        { name: 'Rate Lock Auhtorization', url: '#' },
        { name: 'Standard Deviation Memo', url: '#' }
    ]
    menus: Menu[] = [
        { 
        name: 'Loan Setup & Timeline',
        iconClass: 'fa fa-code',
        active: false,
        submenu: [
            { name: 'HTML', url: '#' },
            { name: 'CSS', url: '#' },
            { name: 'Javascript', url: '#' }
        ]
        },
        { 
        name: 'Loan Terms & Parameters',
        iconClass: 'fa fa-mobile',
        active: false,
        submenu: [
            { name: 'Tablets', url: '#' },
            { name: 'Mobiles', url: '#' },
            { name: 'Desktop', url: '#' }
        ]
        },
        { 
        name: 'Rates & Spreads',
        iconClass: 'fa fa-globe',
        active: false,
        submenu: [
            { name: 'Chrome', url: '#' },
            { name: 'Firefox', url: '#' },
            { name: 'Desktop', url: '#' }
        ]
        },
        { 
            name: 'Underwriting',
            iconClass: 'fa fa-globe',
            active: false,
            submenu: [
                { name: 'Chrome', url: '#' },
                { name: 'Firefox', url: '#' },
                { name: 'Desktop', url: '#' }
            ]
        },
        { 
            name: 'Loans Fees',
            iconClass: 'fa fa-globe',
            active: false,
            submenu: [
                { name: 'Chrome', url: '#' },
                { name: 'Firefox', url: '#' },
                { name: 'Desktop', url: '#' }
            ]
        },
        { 
            name: 'Commission',
            iconClass: 'fa fa-globe',
            active: false,
            submenu: [
                { name: 'Chrome', url: '#' },
                { name: 'Firefox', url: '#' },
                { name: 'Desktop', url: '#' }
            ]
        },
        { 
            name: 'Loan Authorization',
            iconClass: 'fa fa-globe',
            active: true,
            submenu: [
                { name: 'FHA Pricing', url: '#' },
                { name: 'Pricing Authorization', url: '#' },
                { name: 'HMDA Cerification', url: '#' },
                { name: 'Loan Auhtorization', url: '#' },
                { name: 'Rate Lock Auhtorization', url: '#' },
                { name: 'Standard Deviation Memo', url: '#' }
            ]
        },
        { 
            name: 'Loan Tools',
            iconClass: 'fa fa-globe',
            active: false,
            submenu: [
                { name: 'Chrome', url: '#' },
                { name: 'Firefox', url: '#' },
                { name: 'Desktop', url: '#' }
            ]
        },
        { 
            name: 'Ownership & Terms',
            iconClass: 'fa fa-globe',
            active: false,
            submenu: [
                { name: 'Chrome', url: '#' },
                { name: 'Firefox', url: '#' },
                { name: 'Desktop', url: '#' }
            ]
        }
        
    ];
    public toggleSideMenu() {
        if ( this.navState === 'expanded' ) {
            this.navState = 'collapsed';
        } else {
            this.navState = 'expanded';
        }
    }
    ngAfterViewInit() {

    }
}
