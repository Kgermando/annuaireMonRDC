import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { AddFormsComponent } from './add-forms/add-forms.component';
import { EditFormsComponent } from './edit-forms/edit-forms.component';
import { FormsListComponent } from './forms-list/forms-list.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
    {path: '', component: LayoutComponent,
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'add-forms', component: AddFormsComponent},
      {path: 'edit/:id', component: EditFormsComponent},
      {path: 'forms-list', component: FormsListComponent},

      { path: '', redirectTo: 'profile' },
      { path: '**', redirectTo: 'profile' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
