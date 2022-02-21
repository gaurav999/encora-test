import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { ContactService } from './contact.service';
import {   HttpClientModule  } from '@angular/common/http';
import { Contact } from '../utils/models/contact.model';

describe('ContactService', () => {
  const contact: Contact[] = [
    {
      "firstName": "Amit",
      "lastName": "Roy",
      "phone": "9876543210",
      "id": 1
    },
    {
      "firstName": "Aakash",
      "lastName": "Choudhury",
      "phone": "9876584431",
      "id": 2
    },
    {
      "firstName": "Arun",
      "lastName": "Dey",
      "phone": "5748493812",
      "id": 3
    },
    {
      "firstName": "Vikash",
      "lastName": "Trivedi",
      "phone": "9873625261",
      "id": 4
    },
    {
      "firstName": "Gaurav",
      "lastName": "Gupta",
      "phone": "7002873284",
      "id": 5
    }
  ];
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ContactService = TestBed.get(ContactService);
    expect(service).toBeTruthy();
  });
  it('should modify contact', () => {
    const service: ContactService = TestBed.get(ContactService);
    service.saveContactList(contact);
    const dummy = {
      id: 1,
      firstName: 'gaurav',
      lastName : 'rathee',
      phone : '99999999'
    }
    service.saveContactList(contact);
    service.modifyContact(dummy);
    const getContactList =  service.getContactList();
    expect(getContactList[0]).toEqual(dummy);
  });
  // it('should get contact by id: valid id', () => {
  //   const service: ContactService = TestBed.get(ContactService);
  //   service.saveContactList(contact);
  //   expect(service.getContactbyId(0)).toEqual(contact[0]);
  // });
  it('should get contact by id: invalid id', () => {
    const service: ContactService = TestBed.get(ContactService);
    service.saveContactList(contact);
    const id= 25;
    expect(service.getContactbyId(id)).toBe(false);
  });
  it('should get contact list', () => {
    const service: ContactService = TestBed.get(ContactService);
    service.saveContactList(contact);
    expect(service.getContactList()).toEqual(contact);
  });

  it('should add contact', () => {
    const service: ContactService = TestBed.get(ContactService);
    service.saveContactList(contact);
    const dummy = {
      id: 0,
      firstName: 'gaurav',
      lastName : 'rathee',
      phone : '99999999'
    }
    service.modifyContact(dummy);
    const getContactList =  service.getContactList();
    expect(getContactList[getContactList.length -1]).toEqual(dummy);
  });
  
  it('should add first contact', () => {
    const service: ContactService = TestBed.get(ContactService);
    service.saveContactList(contact);
    const dummy = {
      id: 0,
      firstName: 'gaurav',
      lastName : 'rathee',
      phone : '99999999'
    }
    service.saveContactList([]);
    service.modifyContact(dummy);
    const getContactList =  service.getContactList();
    expect(getContactList[getContactList.length -1]).toEqual(dummy);
  });
  
  it('should delete contact', () => {
    const service: ContactService = TestBed.get(ContactService);
    service.saveContactList(contact);
    service.deleteConatctList('2');
    const getContactList =  service.getContactList();
    expect(getContactList.length).toBe(contact.length);
  });
  it('should save contact', () => {
    const service: ContactService = TestBed.get(ContactService);
    service.saveContactList(contact);
    expect(service.contactList).toEqual(contact);
  });
});
