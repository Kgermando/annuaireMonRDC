import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  collapsed = true;

    items = [
      { title: 'Dashboard', link: '/layout/profile' },
      { title: 'Logout', link: '' },
    ];

  constructor(private authservice: AuthService) { }

    signOut() {
      this.authservice.SignOut();
    }

}
