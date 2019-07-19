import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { NbLayoutModule,
         NbButtonModule,
         NbContextMenuModule,
         NbCardModule,
         NbSearchModule,
         NbSidebarModule,
         NbMenuModule } from '@nebular/theme';

import { AddFormsComponent } from './add-forms/add-forms.component';
import { EditFormsComponent } from './edit-forms/edit-forms.component';
import { FormsListComponent } from './forms-list/forms-list.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    LayoutComponent,

    AddFormsComponent,
    EditFormsComponent,
    FormsListComponent,
    ProfileComponent,
    HeaderComponent,
  ],

  imports: [
    LayoutRoutingModule,

    NbLayoutModule,
    NbButtonModule,
    NbMenuModule,
    NbContextMenuModule,
    NbCardModule,
    NbSearchModule,
    NbSidebarModule,
    NbMenuModule,
  ]
})
export class LayoutModule { }
