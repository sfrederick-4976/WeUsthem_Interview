import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})

export class AddContactComponent implements OnInit {
  // Checking for required and valid inputs
  articles$: Observable<Contact[]>;

  constructor(private http: HttpClient,  private router: Router, private db: AngularFirestore) { }
  newContact: Contact = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };
  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.newContact);
    this.db.collection<Contact>('Contacts').add(this.newContact);
  }
  ngOnInit(): void {

  }
}
