import { Component, ViewEncapsulation, HostBinding, HostListener, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
//import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
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
                    animate( 200 ),
                    animate( 200 )
                ]
            )
        ]
    )],
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
       './main-menu.component.scss'
    ],
})
export class MainMenuComponent {
    private year = new Date().getFullYear();
    public logger = null;
    public navState: string;
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

    public toggleNav() {
        // if ( this.navState === 'expanded' ) {
        //     this.navState = 'collapsed';
        // } else {
        //     this.navState = 'expanded';
        // }
    }
    ngAfterViewInit() {
        $(document).ready(function () {
          $('.navbar-light .dmenu').hover(function () {
                  $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
              }, function () {
                  $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
              });
          }); 
           
              $(document).ready(function() {
            $(".megamenu").on("click", function(e) {
              e.stopPropagation();
            });
          });
    }
}
