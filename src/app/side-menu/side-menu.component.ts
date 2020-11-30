import { Component, OnInit, Input } from '@angular/core';
import { caretAltRight } from '@progress/kendo-svg-icons';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() label;
  @Input() sideMenu;
  public icons = { caretAltRight };

  ngOnInit() {
  }


}