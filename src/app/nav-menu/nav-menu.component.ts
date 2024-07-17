import { Component, OnInit } from '@angular/core';
import { NavMenuConstants } from './nav-menu.constants';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent implements OnInit {

  public navItems: Array<any>;

  constructor() {
    this.navItems = [];
  }

  ngOnInit(): void {
    this.navItems = NavMenuConstants.MENU;
  }

}
