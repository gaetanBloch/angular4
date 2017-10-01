import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];

  constructor() { }

  ngOnInit() {
    this.name = "Gaëtan Bloch";
    this.age = 28;
    this.email = 'gbloch@gmail.com';
    this.address = {
      street: 'Allée des paquerettes',
      city: 'Olonne sur mer',
      state: "Vendée"
    };
    this.hobbies = ['sports', 'movies', 'computers'];
  }
}

interface Address {
  street: string,
  city: string,
  state: string
}
