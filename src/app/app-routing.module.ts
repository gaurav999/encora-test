import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactListComponent} from './contact-list/contact-list.component';
import {UpdateContactListComponent} from './update-contact-list/update-contact-list.component';



const routes: Routes = [
  { path: '', component: ContactListComponent, pathMatch: 'full' },
  { path: 'add', component: UpdateContactListComponent, pathMatch: 'full' },
  { path: 'update/:id', component: UpdateContactListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
