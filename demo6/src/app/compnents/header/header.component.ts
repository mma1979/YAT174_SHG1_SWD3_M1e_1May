import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserStoreService } from '../../stores/user-store.service';
import { LangStoreService } from '../../stores/lang-store.service';
import { SharedModule } from '../../modules/shared/shared.module';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, SharedModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnDestroy {

  isAuth = false;
  lang = "en"
  userSubscribe: Subscription;
  langSubscribe: Subscription;

  constructor(private userStore: UserStoreService, private router: Router, 
    private langStore: LangStoreService) {

    this.userSubscribe = this.userStore.token$.subscribe(_ => this.isAuth = this.userStore.isAuth())
    this.langSubscribe = this.langStore.language$.subscribe(lang => {
      this.lang = lang;
    })

  }

  logout() {
    this.userStore.logout();
    this.router.navigate(['/login']);
  }

  toggleLanguage() {
    let newLang = this.lang === 'ar' ? 'en' : 'ar';
    this.langStore.changelanguage(newLang)
    window.location.reload();
  }



  ngOnDestroy(): void {
    this.userSubscribe.unsubscribe()
    this.langSubscribe.unsubscribe()
  }

}
