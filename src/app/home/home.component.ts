import {Component, OnInit, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';
import {HomeService} from './home.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Title = 'DateMeNow';
  login = true;
  userLogin = [];
  modalRef: BsModalRef;
  users: any;
  selectId: any;

  constructor(
    private router: Router,
    private _users: HomeService,
    private modalService: BsModalService
  ) { }

  ClickLogin(): void {
    this.login = !this.login;
    console.log(this.login)
  }


  openModalWithClass(template: TemplateRef<any>, value) {
    this.modalRef = this.modalService.show( template );
    this.selectId = value;
  }

  validateLogin(): void {
    if (this.login === true) {
      this.router.navigate(['/auth']);
    } else {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this._users.getUsers()
      .subscribe(
        date => this.users = date,
          err => console.error(err)
      );
  }

}
