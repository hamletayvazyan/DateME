import {Component, OnInit} from '@angular/core';
import {HomeService} from '../home/home.service';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  auth = [];
  constructor( private request: HomeService) {
  }


  signUpVal(value) {
    this.request.requestReg(value)
  }

  ngOnInit() {
  }

}
