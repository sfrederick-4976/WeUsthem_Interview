import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent} from './add-contact/add-contact.component';
import { ContactDisplayComponent } from './contact-display/contact-display.component';


const routes: Routes = [
  { path: '', component: ContactDisplayComponent},
  { path: 'addContact', component: AddContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
