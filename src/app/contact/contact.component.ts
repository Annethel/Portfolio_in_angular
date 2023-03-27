import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(""),
      message: new FormControl("")
    });
  }

  onclickDone = ()=>{
    this.contactForm.reset();
  }

}
