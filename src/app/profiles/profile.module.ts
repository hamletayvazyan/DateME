import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {ProfileComponent} from './profile.component';
import {FormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap';
import {HomeService} from '../home/home.service';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'profile', component: ProfileComponent}
    ])
  ],
  declarations: [
    ProfileComponent,
  ],
  providers: [HomeService]
})
export class ProfileModule { }
