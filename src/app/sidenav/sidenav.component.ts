import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { SideNavToggle } from '../model/sidenav-toggle.model';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
          style({opacity: 0})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'})
          ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  @Output('onToggleSideNav') onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed: boolean = false;
  screenWidth = 0;
  navData = navbarData;

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.screenWidth = window.innerWidth;

    if(this.screenWidth <= 768){
      this.collapsed = false;
      this.toggleSideNav();
    }
  }

  ngOnInit(){
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(){

    this.collapsed = !this.collapsed;
    this.toggleSideNav();
  }

  closeSidenav(){
    this.collapsed = false;
    this.toggleSideNav();
  }

  toggleSideNav(){

    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth
    });

  }
}
