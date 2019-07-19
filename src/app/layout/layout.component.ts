import { Component } from '@angular/core';
import { MENU_ITEMS } from './menu-items';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  items = MENU_ITEMS;

}
