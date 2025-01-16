import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms"

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  userName: string = '';
  userAge: string = '';
  userEmail: string = '';
  userPassword: string = '';

  showLabel(el:HTMLLabelElement, inputValue:string):void {
    if(inputValue) {
      el.classList.remove('opacity-0')
      el.classList.add('move');
    } else {
      el.classList.add('opacity-0')
      el.classList.remove('move');
    }
  }
}
