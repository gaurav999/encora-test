import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../service/contact.service';
import { Contact } from '../utils/models/contact.model';

@Component({
  selector: 'app-update-contact-list',
  templateUrl: './update-contact-list.component.html',
  styleUrls: ['./update-contact-list.component.scss']
})
export class UpdateContactListComponent implements OnInit {
  contactForm: FormGroup;
  id: string;
  constructor( 
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute) { 
      this.id = this.route.snapshot.params['id'];;
      this.contactForm = this.fb.group({
        firstname:['',Validators.required],
        lastName: ['',Validators.required],
        phone: ['',[Validators.required, Validators.maxLength(10)]]
      });
   }

  ngOnInit() {
    if( this.id) {
      const contact: Contact = this.contactService.getContactbyId(+this.id);
      this.contactForm.setValue({
        firstname: contact.firstName,
        lastName: contact.lastName,
        phone: contact.phone
      })
    }
   
  }

  onSubmit(form: FormGroup) {
    if(form.valid) {
      const contact: Contact = {
        id: +this.id || 0,
        firstName : form.value.firstname,
        lastName: form.value.lastName,
        phone:  form.value.phone
      }
      this.contactService.modifyContact(contact);
      this.router.navigate(['']);
    } else {
      alert('Form is invalid');
    }
  }

}
