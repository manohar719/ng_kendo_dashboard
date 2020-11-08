import { Component, OnInit, Input } from '@angular/core';
import { Config, Menu } from './types';

@Component({
  selector: 'accordion',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Input() options;
  @Input() menus: Menu[];
  config: Config;
  
  ngOnInit() {
    this.config = this.mergeConfig(this.options);
  }

  mergeConfig(options: Config) {
    const config = {
      // selector: '#accordion',
      multi: true
    };

    return { ...config, ...options };
  }

  toggle(index: number) {
    if (!this.config.multi) {
      this.menus.filter(
        (menu, i) => i !== index && menu.active
      )
    }

    this.menus[index].active = !this.menus[index].active;
  }
}