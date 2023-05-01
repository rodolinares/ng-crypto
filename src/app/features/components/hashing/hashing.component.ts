import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as MD5 from 'crypto-js/md5';
import * as SHA1 from 'crypto-js/sha1';
import * as SHA256 from 'crypto-js/sha256';
import * as SHA512 from 'crypto-js/sha512';

import { HASHING, MESSAGES } from 'src/app/shared/utility/constants';

@Component({
  selector: 'app-hashing',
  templateUrl: './hashing.component.html',
  styleUrls: ['./hashing.component.scss']
})
export class HashingComponent implements OnInit {
  copied = MESSAGES.copied;
  hashingDescription = HASHING.description;
  hashingTitle = HASHING.title;
  input = '';
  outputMD5 = '';
  outputSHA1 = '';
  outputSHA256 = '';
  outputSHA512 = '';

  constructor(private clipboard: Clipboard, private router: Router) {}

  ngOnInit(): void {
    const value = 'The quick brown fox jumps over the lazy dog.';
    this.input = value;
    this.onChange(value);
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onChange(value: string) {
    this.outputMD5 = MD5(value).toString();
    this.outputSHA1 = SHA1(value).toString();
    this.outputSHA256 = SHA256(value).toString();
    this.outputSHA512 = SHA512(value).toString();
  }

  onCopy(value: string) {
    this.clipboard.copy(value);
  }
}
