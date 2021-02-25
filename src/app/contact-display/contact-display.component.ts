import {Component, ViewChild, AfterViewInit} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {AngularFirestore} from '@angular/fire/firestore';
import {Contact} from '../add-contact/add-contact.component';
import {MatAccordion} from '@angular/material/expansion';

export interface ContactDisplay {
  image: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-contact-display',
  templateUrl: './contact-display.component.html',
  styleUrls: ['./contact-display.component.css']
})
export class ContactDisplayComponent implements AfterViewInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatSort) sort: MatSort;

  constructor(private db: AngularFirestore) { }

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    this.db.collection<Contact>('Contacts').valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }
}
