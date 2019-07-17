import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { NbLayoutModule, NbButtonModule, NbMenuModule, NbContextMenuModule, NbCardModule, NbSearchModule } from '@nebular/theme';
import { PageRoutingModule } from './pages-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';




@NgModule({
  declarations: [DashboardComponent, PagesComponent, NotFoundComponent, SearchComponent, HeaderComponent, FooterComponent, ContactComponent, AboutComponent],
  imports: [
    NbLayoutModule,
    PageRoutingModule,

    NbButtonModule,
    NbMenuModule,
    NbContextMenuModule,
    NbCardModule,
    NbSearchModule,
  ]
})
export class PagesModule { }
