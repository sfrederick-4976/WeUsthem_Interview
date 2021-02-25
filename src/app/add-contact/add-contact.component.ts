import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})

export class AddContactComponent implements OnInit {
  constructor(private http: HttpClient,  private router: Router) { }
  // Checking for required and valid inputs
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.pattern('^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$')]);
  postId;
  // tslint:disable-next-line:typedef
  getFirstNameErrorMessage() {
    if (this.firstName.hasError('required')) {
      return 'You must enter a first name';
    }

    return this.firstName.hasError('firstName') ? 'Enter a first name' : '';
  }
  // tslint:disable-next-line:typedef
  getLastNameErrorMessage() {
    if (this.lastName.hasError('required')) {
      return 'You must enter a last name';
    }
    return this.lastName.hasError('lastName') ? 'Enter a last name' : '';
  }
  // tslint:disable-next-line:typedef
  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a valid email';
    }

    return this.email.hasError('phone') ? 'Not a valid email' : '';
  }
  // tslint:disable-next-line:typedef
  getPhoneErrorMessage() {
    if (this.phone.hasError('required')) {
      return 'You must enter a valid phone number';
    }

    return this.phone.hasError('phone') ? 'Not a valid phone number' : '';
  }
  // tslint:disable-next-line:typedef
  onSubmit( value: any) {
    const error = this.getPhoneErrorMessage() + this.getFirstNameErrorMessage() + this.getLastNameErrorMessage() +
      this.getEmailErrorMessage();
    if (error === ''){
      console.log(value.value);
    } else {
      console.log('Didn\'t work');
    }
  }
  ngOnInit(): void {

  }
}
