import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface ContactDisplay {
  image: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const CONTACT_DISPLAY: ContactDisplay[] = [
  {image: 1, firstName: 'Hydrogen', lastName: 'Miller', email: 'H', phone: '12345'},
  {image: 2, firstName: 'Helium', lastName: 'Herman', email: 'He', phone: '12345'},
  {image: 3, firstName: 'Lithium', lastName: 'Andrews', email: 'Li', phone: '12345'},
  {image: 4, firstName: 'Beryllium', lastName: 'Carrigan', email: 'Be', phone: '12345'},
  {image: 5, firstName: 'Boron', lastName: 'Jacobs', email: 'B', phone: '12345'},
  {image: 6, firstName: 'Carbon', lastName: 'Jefferson', email: 'C', phone: '12345'},
  {image: 7, firstName: 'Nitrogen', lastName: 'McCarthy', email: 'N', phone: '12345'},
  {image: 8, firstName: 'Oxygen', lastName: 'Stark', email: 'O', phone: '12345'},
  {image: 9, firstName: 'Fluorine', lastName: 'Harrison', email: 'F', phone: '12345'},
  {image: 10, firstName: 'Neon', lastName: 'Arial', email: 'Ne', phone: '12345'},
];

@Component({
  selector: 'app-contact-display',
  templateUrl: './contact-display.component.html',
  styleUrls: ['./contact-display.component.css']
})
export class ContactDisplayComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['image', 'firstName', 'lastName', 'email', 'phone'];
  dataSource = new MatTableDataSource(CONTACT_DISPLAY);

  @ViewChild(MatSort) sort: MatSort;


  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

}
