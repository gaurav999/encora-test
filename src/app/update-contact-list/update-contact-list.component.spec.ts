import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContactListComponent } from './update-contact-list.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../service/contact.service';
import {   HttpClientModule  } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Contact } from '../utils/models/contact.model';


describe('UpdateContactListComponent', () => {
  let component: UpdateContactListComponent;
  let fixture: ComponentFixture<UpdateContactListComponent>;
  let MockContactService;
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
  
  const contactServiceStub = {
    getContactListApi: jasmine.createSpy('getContactListApi')
      .and.returnValue(
        of(contact)
      ),
      deleteConatctList: jasmine.createSpy('deleteConatctList')
      .and.returnValue(
       [contact[0],contact[1],contact[2],contact[3]] 
      ),
      AddContact: jasmine.createSpy('AddContact')
      .and.returnValue(
        []
      ),
      getContactList: jasmine.createSpy('AddContact')
      .and.returnValue(
        []
      ),
      saveContactList: jasmine.createSpy('saveContactList').and.returnValue(true)
  }
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateContactListComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ { provide: ContactService, useValue: contactServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
