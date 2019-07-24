import { NgModule } from '@angular/core';
import { PageRoutingModule } from './pages-routing.module';
import { AuthGuard } from '../service/guard/auth.guard';
import { AuthService } from '../service/auth/auth.service';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

import { NbLayoutModule,
         NbButtonModule,
         NbMenuModule,
         NbContextMenuModule,
         NbCardModule,
         NbSearchModule,
         NbSidebarModule, 
         NbActionsModule} from '@nebular/theme';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    PagesComponent,
    NotFoundComponent,
    SearchComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    FooterComponent,
    HeaderComponent
    ],

  imports: [
    NbLayoutModule,
    PageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,

    NgbModule,
    NgbDropdownModule,

    NbButtonModule,
    NbMenuModule,
    NbContextMenuModule,
    NbCardModule,
    NbSearchModule,
    NbSidebarModule,
    NbActionsModule,
  ],
  providers: [AuthGuard, AuthService ],
})
export class PagesModule { }
