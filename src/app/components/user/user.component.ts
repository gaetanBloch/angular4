import {Component, OnInit} from '@angular/core';
import { DataService } from "../../services/data.service";

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
  posts: Post[];
  isEdit = false;

  constructor(private dataService:DataService) {

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

    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
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

  addHobby(hobby) {
    this.hobbies.unshift(hobby);
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1)
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
}


interface Address {
  street: string,
  city: string,
  state: string
}

interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}
