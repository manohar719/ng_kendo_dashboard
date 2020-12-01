import { Component, ViewEncapsulation, HostBinding, HostListener, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { graph, fileAdd, bell, caretAltDown } from '@progress/kendo-svg-icons';
import $ from 'jquery';

@Component({
    selector: 'main-menu',
    templateUrl: './main-menu.component.html',
    animations: [trigger(
        'toggleNav',
        [
            state( 'collapsed, void', style({transform: 'translateX(-100%)'}) ),
            state( 'expanded', style({transform: 'translateX(0)'}) ),
            transition( 'collapsed <=> expanded',
                [
                    animate( 100 ),
                    animate( 100 )
                ]
            )
        ]
    )],
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
       './main-menu.component.scss'
    ],
})
export class MainMenuComponent{
    public icons = { graph, fileAdd, bell, caretAltDown};
    private year = new Date().getFullYear();
    public logger = null;
    public navState: string;
    public sideMenuActive: boolean = true;
    public megaMenu: boolean = false;
    constructor(private router: Router) {
        if ( window.innerWidth < 768 ) {
            this.navState = 'collapsed';
        } else {
            this.navState = 'expanded';
        }
    }

    @HostBinding('attr.id') protected get id(): string {
        return 'app';
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if ( event.target.innerWidth < 768 ) {
            this.navState = 'collapsed';
        } else {
            this.navState = 'expanded';
        }
    }

    public showNav() {
        return this.router.url !== '/signin';
    }

    public showSideMenu(flag : boolean){
        this.sideMenuActive = flag
    }
    
    public toggleMenu() {
        this.megaMenu = !this.megaMenu
    }
    ngAfterViewInit() {
        
    }
}
