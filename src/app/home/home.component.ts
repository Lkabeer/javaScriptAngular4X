import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Pipe, PipeTransform } from "@angular/core";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  contacts: any = [];  
  startX: number = 0;
  endX: number = 10;
  newContact: any; 
  searchStart: boolean = false;

  constructor(private _http: Http) {
    this.newContact = {
      name: "", 
      phone: "",
      email: ""
    }
  }

  // sort data alphabetically X-Team
  sortByName(x,y) {
    return ((x.name == y.name) ? 0 : ((x.name > y.name) ? 1 : -1 ));
  }

  // list Contacts X-Team
  listContacts(contactsPerPage, page) {
    this.startX = page * contactsPerPage;
    this.endX = this.startX + contactsPerPage;
  }

  // load json Data X-Team
  getContacts(contactsPerPage, page) {
    console.log(this.startX, this.endX);
    return this._http.get("../../assets/mock-data.json").map(res => res.json());
  }

  // update Json Contacts X-Team 
  updateJsonX(form: any) {
    this._http.post("../../assets/mock-data.json", form);
  }

  // add Contact X-Team 
  addContactX(form: any) {
    console.log(form);
    this.updateJsonX(form);
    this.contacts.push(form);
    console.log(this.contacts);
  }

  // remove Contact X-Team
  removeContact(contact) {
    if(confirm('Are you sure?')) {
      this.contacts.splice(contact, 1);      
    }
  }

  ngOnInit() {
    this.listContacts(10, 0);
    this.getContacts(this.startX, this.endX).subscribe(
      data => {
        data.sort(this.sortByName);
        for (var i = this.startX; i < this.endX; i++) {
          this.contacts.push(data[i]);
        }
      }
    );
  }
}