import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { AngularFirestore} from '@angular/fire/firestore';

export interface Contact {
  Uid: string;
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
  firstName = new FormControl(Validators.requiredTrue);
  email = new FormControl(Validators.requiredTrue);
  phone = new FormControl(Validators.pattern('^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$'),
    Validators.requiredTrue);
  constructor(private http: HttpClient,  private router: Router, private db: AngularFirestore) { }
  newContact: Contact = {
    Uid: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };
  // On submit, data is pulled and added as a new entry into Firestore collection "Contacts"
  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.newContact);
    this.db.collection<Contact>('Contacts').add(this.newContact).then(() => {
      console.log('Document successfully added!');
      this.router.navigate(['/']);
    }).catch((error) => {
      console.log('Input not correct', error);
    });
  }

  // tslint:disable-next-line:typedef
  getErrorMessage() {
    if (this.phone.hasError('required')) {
      return 'You must enter a value';
    }

    return this.phone.hasError('phone') ? 'Please enter a valid phone number' : '';
  }
  ngOnInit(): void {

  }
}
