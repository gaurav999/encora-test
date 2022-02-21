import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ContactService} from '../service/contact.service';
import { Contact } from '../utils/models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  public contactList: Contact[] = [];
  constructor(
    private contactService: ContactService,
    private router:Router
  ) { }

  ngOnInit() {
    this.getContactList();
    if(this.contactList.length === 0) {
      this.fetchContactList();
    }
  }

  private fetchContactList() {
    this.contactService.getContactListApi().subscribe((data: Contact[]) => {
      this.contactService.saveContactList(data);
      this.contactList = data;

    });
  }
  
  deleteContact(id: string) {
    this.contactService.deleteConatctList(id);
    this.getContactList();
  }

  AddContact(): void {
    this.router.navigate(['add']);
  }

  editContact(contact: Contact) {
    this.router.navigate(['update',contact.id]);
  }
  getContactList() {
    this.contactList = this.contactService.getContactList();
  }

}
