import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  textButtonLogin = "Iniciar sesión";
  textInputEmail = "Ingrese su correo";
  textInputPassword = "Ingrese su contraseña";


  constructor() {
  }

  ngOnInit(): void {
  }


  changeName() {
    this.textButtonLogin = "Other name";
  }
}
