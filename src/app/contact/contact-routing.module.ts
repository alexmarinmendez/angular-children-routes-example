import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactCreateComponent } from '../contact-create/contact-create.component';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';

const routes: Routes = [
  { path: 'contact', component: ContactCreateComponent },
  { path: 'contact/detail', component: ContactDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
