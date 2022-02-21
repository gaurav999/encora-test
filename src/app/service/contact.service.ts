import { Injectable } from '@angular/core';
import {  HttpClient  } from '@angular/common/http';
import {getContactListApi} from '../utils/constant/api.constant';
import {Contact} from '../utils/models/contact.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
   public contactList: Contact[] = [];

  constructor(private http: HttpClient ) { }

  getContactListApi(): Observable<Contact[]> {
    return this.http.get<any>(getContactListApi);
  }

  getContactList(): Contact[] {
    return this.contactList;
  }

  deleteConatctList(id: string): void {
    this.contactList.forEach((contact, index) => {
      if(contact.id === Number(id)) {
        this.contactList.splice(index,1);
      }
    });
  }
  
  saveContactList(contactList: Contact[]): void {
    this.contactList = contactList;  
  }

  modifyContact(contact: Contact) {
    if(contact.id) {
      this.contactList.map((element)=> {
        if(element.id === contact.id) {
          element.firstName = contact.firstName;
          element.lastName = contact.lastName;
          element.phone = contact.phone;
        }
      });
    } else {
      if(this.contactList.length > 0) {  
        const highestId = this.contactList[this.contactList.length - 1]['id'];
        contact.id = highestId + 1;
      } else {
        contact.id = 1;
      }
      this.contactList.push(contact);
    }
  }

  getContactbyId(id: number): any {
    const contact = this.contactList.filter((contact: Contact) => contact.id === id)[0];
    if(contact) {
      return contact;
    } else {
      return false;
    }
  }
}
