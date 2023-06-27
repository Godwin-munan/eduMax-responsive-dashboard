import { Component } from '@angular/core';
import { SideNavToggle } from './model/sidenav-toggle.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eduMax-responsive-dashboard';

  isSideNavCollapse = false;
  screenWidth = 0;


  onToggleSideNav(data: SideNavToggle){
    
    this.isSideNavCollapse = data.collapsed;
    this.screenWidth = data.screenWidth;
  }
}
