import { Component, ViewEncapsulation, HostBinding, HostListener, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
//import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { graph, fileAdd, bell } from '@progress/kendo-svg-icons';
import $ from 'jquery';

@Component({
    selector: 'secondary-menu',
    templateUrl: './secondary-menu.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
       './secondary-menu.component.scss'
    ],
})
export class SecondaryMenuComponent {
    public listItems: Array<string> = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
    ngAfterViewInit() {

    }
}
