import {Component, OnInit, OnDestroy, TemplateRef} from '@angular/core';
import {arrayify} from 'tslint/lib/utils';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit, OnDestroy {

  edit = false;
  userProfileUpdate = [];
  profileDetail = [];
  maxWeight = 120;
  maxLen = 200;
  i: number;
  j: number;
  countWeigth = arrayify();
  countLen = arrayify();

  constructor() {
  }

  ngOnInit() {
    for (this.i = 50; this.i < this.maxWeight; this.i++) {      this.countWeigth.push(this.i);    }
    for (this.j = 150; this.j < this.maxLen; this.j++) {      this.countLen.push(this.j);    }
  }
  ngOnDestroy(){}
  EditToggle() {
      this.edit = !this.edit;
      if(!this.edit){
        this.userProfileUpdate = [];
        this.profileDetail = [];
        console.log(this.userProfileUpdate, this.profileDetail)
      }
     // console.log(this.userProfileUpdate, this.profileDetail)
  }

  confirm(value) {
    //if (value.length > 0) {      this.edit = !this.edit;    }
    this.userProfileUpdate = value;
    console.log(this.userProfileUpdate, this.profileDetail)
  }

  decline() {
    this.edit = false;
    this.userProfileUpdate = [];
    console.log(this.userProfileUpdate, this.edit);
  }



}
