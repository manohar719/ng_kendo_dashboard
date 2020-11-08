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
            state( 'collapsed, void', style({left: '-100%'}) ),
            state( 'expanded', style({left: '0'}) ),
            transition( 'collapsed <=> expanded',
                [
                    animate( 200 ),
                    animate( 200 )
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
    menus: Menu[] = [
        { 
        name: 'Front-end',
        iconClass: 'fa fa-code',
        active: true,
        submenu: [
            { name: 'HTML', url: '#' },
            { name: 'CSS', url: '#' },
            { name: 'Javascript', url: '#' }
        ]
        },
        { 
        name: 'Responsive web',
        iconClass: 'fa fa-mobile',
        active: false,
        submenu: [
            { name: 'Tablets', url: '#' },
            { name: 'Mobiles', url: '#' },
            { name: 'Desktop', url: '#' }
        ]
        },
        { 
        name: 'Web Browser',
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
