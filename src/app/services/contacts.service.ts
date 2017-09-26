import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class ContactsService {

  contacts: any = [];  
  startX: number = 0;
  endX: number = 10;
  newContact: any;  

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

  // add Contact X-Team 
  addContact(newContact: any) {
    console.log(newContact);
  }

  setContact(form: any) {
    // this.addContact(this.newContact);
    this.contacts.push(this.newContact);
    console.log(this.contacts);
  }

}
