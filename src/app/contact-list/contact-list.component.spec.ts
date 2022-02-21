import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { Observable, of } from 'rxjs';
import { ContactService } from '../service/contact.service';
import { UpdateContactListComponent } from '../update-contact-list/update-contact-list.component';
import { Contact } from '../utils/models/contact.model';

import { ContactListComponent } from './contact-list.component';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
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
      declarations: [ ContactListComponent ],
      imports: [HttpClientModule, RouterTestingModule.withRoutes([{path: 'add', component: UpdateContactListComponent}])],
      providers: [ { provide: ContactService, useValue: contactServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should ngOnint contact list', () => {
     spyOn(component, 'ngOnInit').and.callThrough();
     component.contactList = [];
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
    expect(component.contactList).toEqual(contact);
  });
  
  it('should deleteContact contact list', () => {
    spyOn(component, 'deleteContact').and.callThrough();
    component.contactList = contact;
    component.deleteContact('2');
    expect(component.deleteContact).toHaveBeenCalled();
  });
  
  
  it('should addContact', () => {
    spyOn(component, 'AddContact').and.callThrough();
    component.AddContact();
    expect(component.AddContact).toHaveBeenCalled();
  });
});
