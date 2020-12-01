import { Component, ViewEncapsulation, HostBinding, HostListener, ViewChild, Output, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { menu, x } from '@progress/kendo-svg-icons';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, distinctUntilChanged } from 'rxjs/operators';

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
    @Output() newItemEvent = new EventEmitter<boolean>();
    public icons = { menu, x };
    public navState: string = 'expanded';
    public listItems: Array<string> = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
    public menuLink: string;
    
    //object for side menu
    public sideMenu;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
      ) {
        this.sideMenu = this.buildSideMenu(this.activatedRoute.root)
      }
    
      ngOnInit() {
        this.router.events.pipe(
          filter((event) => event instanceof NavigationEnd),
          distinctUntilChanged(),
        ).subscribe(() => {
            this.sideMenu = this.buildSideMenu(this.activatedRoute.root);
            this.newItemEvent.emit(this.hasSideMenu())
        })
      }
    
      buildSideMenu(route: ActivatedRoute) {
        if (route.firstChild) {
          return this.buildSideMenu(route.firstChild);
        }
        let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
        let sideMenu = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.subMenu : null;
        return {
            label : label,
            menus : sideMenu
        }
    
    }

    public toggleSideMenu() {
        if ( this.navState === 'expanded' ) {
            this.navState = 'collapsed';
            this.newItemEvent.emit(false);
        } else {
            this.navState = 'expanded';
            this.newItemEvent.emit(true);
        }
        
    }
    public hasSideMenu() {
        return this.sideMenu && this.sideMenu.menus && this.sideMenu.menus.length ? true : false
    }
    ngAfterViewInit() {
        this.hasSideMenu()
        this.newItemEvent.emit(this.hasSideMenu())
    }
}
