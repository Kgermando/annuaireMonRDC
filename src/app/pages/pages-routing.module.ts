import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { SecureInnerPagesGuard } from '../service/guard/secure-inner-pages.guard';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [SecureInnerPagesGuard]
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [SecureInnerPagesGuard]
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [SecureInnerPagesGuard]
      },
      {
        path: 'verifi-email',
        component: VerifyEmailComponent,
        canActivate: [SecureInnerPagesGuard]
      },

      {
        path: '', redirectTo: 'search', pathMatch: 'full', },
      { path: '**', component: NotFoundComponent, },
    ],
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
