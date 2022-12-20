import { Component, OnInit } from '@angular/core';

export interface NavItem { 
  nameLink: string;
  pathLink: string;
  className: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navItems: Array<NavItem> = [
    { nameLink: 'HOME', pathLink: 'home', className: 'nav-item' },
    { nameLink: 'SETTINGS', pathLink: 'settings', className: 'nav-item'},
    { nameLink: 'SHOP', pathLink: 'shop', className: 'nav-item' },
  ]

  navbarVariable: boolean = false;
  iconVariable: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.navbarVariable = !this.navbarVariable;
    this.iconVariable = !this.iconVariable;
  }
}
