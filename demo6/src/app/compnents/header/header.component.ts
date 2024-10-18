import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserStoreService } from '../../stores/user-store.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isAuth = false;

  constructor(private userStore: UserStoreService, private router: Router) {
    this.userStore.token$.subscribe(_ => this.isAuth = this.userStore.isAuth())
  }

  logout() {
    this.userStore.logout();
    this.router.navigate(['/login']);
  }

}
