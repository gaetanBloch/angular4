import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {
  static readonly GAETAN = "Gaëtan Bloch";
  static readonly JEAN = "Jean Bloch";

  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  nameToggle: boolean = true;

  constructor() {
  }

  ngOnInit() {
    this.name = UserComponent.GAETAN;
    this.age = 28;
    this.email = 'gbloch@gmail.com';
    this.address = {
      street: 'Allée des paquerettes',
      city: 'Olonne sur mer',
      state: "Vendée"
    };
    this.hobbies = ['sports', 'movies', 'computers'];
  }

  onClick() {
    this.nameToggle = !this.nameToggle;
    if (this.nameToggle == true) {
      this.name = UserComponent.GAETAN;
    } else {
      this.name = UserComponent.JEAN;
    }
    this.hobbies.push("New hobby");
  }
}

interface Address {
  street: string,
  city: string,
  state: string
}
