import { Component } from '@angular/core';
import { search } from '@progress/kendo-svg-icons';

@Component({
    selector: 'search-input',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    public icons = { search };
}