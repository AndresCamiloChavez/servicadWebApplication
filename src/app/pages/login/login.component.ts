import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  image = "/assets/logo_servicad_vertical.svg"
  
  constructor() {
  }

  ngOnInit(): void {
  }

}
