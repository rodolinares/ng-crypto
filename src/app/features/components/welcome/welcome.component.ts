import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  data = [
    {
      content:
        'Convert an input of any size into a fixed-size string of characters',
      title: 'Hashing'
    },
    {
      content: 'Coming soon!',
      title: 'HMAC'
    },
    {
      content: 'Coming soon!',
      title: 'PBKDF2'
    },
    {
      content: 'Convert plain text into a secret code',
      title: 'Ciphers'
    },
    {
      content: 'Convert data from one format to another',
      title: 'Encoders'
    }
  ];
}
