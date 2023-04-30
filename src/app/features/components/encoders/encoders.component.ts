import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as Base64 from 'crypto-js/enc-base64';
import * as Hex from 'crypto-js/enc-hex';
import * as Utf8 from 'crypto-js/enc-utf8';

import { ENCODERS } from 'src/app/shared/utility/constants';

@Component({
  selector: 'app-encoders',
  templateUrl: './encoders.component.html',
  styleUrls: ['./encoders.component.scss']
})
export class EncodersComponent implements OnInit {
  encodersDescription = ENCODERS.description;
  encodersTitle = ENCODERS.title;
  input = '';
  outputBase64 = '';
  outputHex = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const value = 'The quick brown fox jumps over the lazy dog.';
    this.input = value;
    this.onChange(value);
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onChange(value: string) {
    this.outputBase64 = this.toBase64(value);
    this.outputHex = this.toHex(value);
  }

  private toBase64(value: string) {
    const words = Utf8.parse(value);
    return Base64.stringify(words);
  }

  private toHex(value: string) {
    const words = Utf8.parse(value);
    return Hex.stringify(words);
  }
}
