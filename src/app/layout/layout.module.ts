import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { NbLayoutModule,
         NbButtonModule,
         NbContextMenuModule,
         NbCardModule,
         NbSearchModule,
         NbSidebarModule,
         NbMenuModule,
         NbDatepickerModule,
         NbSelectModule} from '@nebular/theme';

import { AddFormsComponent } from './add-forms/add-forms.component';
import { EditFormsComponent } from './edit-forms/edit-forms.component';
import { FormsListComponent } from './forms-list/forms-list.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StatistiqueComponent } from './statistique/statistique.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    LayoutComponent,

    AddFormsComponent,
    EditFormsComponent,
    FormsListComponent,
    ProfileComponent,
    HeaderComponent,
    StatistiqueComponent,
  ],

  imports: [
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,

    MaterialModule,

    NgbModule,

    NbLayoutModule,
    NbButtonModule,
    NbMenuModule,
    NbContextMenuModule,
    NbCardModule,
    NbSearchModule,
    NbSidebarModule,
    NbMenuModule,
    NbDatepickerModule,
    NbSelectModule,
  ]
})
export class LayoutModule { }
