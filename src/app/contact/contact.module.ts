import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactCreateComponent } from '../contact-create/contact-create.component';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'contact', component: ContactCreateComponent },
      { path: 'contact/detail', component: ContactDetailComponent },
    ]),
  ],
})
export class ContactModule {}
